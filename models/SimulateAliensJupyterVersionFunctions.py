import numpy as np
import pandas as pd
from scipy import stats
from sklearn.linear_model import LogisticRegression

from shared_aliens import update_Qs_sim, get_summary_initial_learn, get_summary_cloudy,\
    simulate_competition_phase, simulate_rainbow_phase, get_summary_rainbow, get_alien_initial_q


n_actions, n_aliens, n_seasons, n_TS = 3, 4, 3, 3
n_sim_per_subj, n_subj = 1, 26  # n_sim_per_sub = 20, n_subj = 31 (version3.1)  # TODO should be 1, 31-x (1 sim per person; exclude excluded subjects)

# model_name = 'Bayes'
models = ['hier', 'Bayes', 'flat']
param_names = ['alpha', 'beta', 'forget', 'alpha_high', 'beta_high', 'forget_high']

# Column names for the simulation summary measures
## Initial learning phase
IL_cols = ['IL_saving_av', 'IL_saving_first_trial', 'IL_saving_last_trial',  # savings
           'IL_acc_current_TS', 'IL_acc_prev_TS', 'IL_acc_other_TS',  # intrusion errors
           'IL_acc_current_TS_se', 'IL_acc_prev_TS_se', 'IL_acc_other_TS_se',
           'IL_perf_TS0', 'IL_perf_TS1', 'IL_perf_TS2',  # TS values
           'IL_perf_TS0_se', 'IL_perf_TS1_se', 'IL_perf_TS2_se', 'IL_perf_TS_corr'
           ]

## Cloudy phase
CL_cols = ['CL_acc_trial0', 'CL_acc_trial1', 'CL_acc_trial2', 'CL_acc_trial3',
           'CL_acc_trial0_se', 'CL_acc_trial1_se', 'CL_acc_trial2_se', 'CL_acc_trial3_se',
           'CL_slope', 'CL_slope_TS0', 'CL_slope_TS1', 'CL_slope_TS2']  # TS reactivation

## Competition phase
CO_cols = ['CO_acc_season', 'CO_acc_season_alien', 'CO_acc_season_se', 'CO_acc_season_alien_se']  # competition alien values & TS values

## Rainbow phase
RB_cols = ['RB_alien0_action0', 'RB_alien0_action1', 'RB_alien0_action2',
           'RB_alien1_action0', 'RB_alien1_action1', 'RB_alien1_action2',
           'RB_alien2_action0', 'RB_alien2_action1', 'RB_alien2_action2',
           'RB_alien3_action0', 'RB_alien3_action1', 'RB_alien3_action2']
RB_sum_cols = ['TS0', 'TS1', 'TS2', 'None', 'TS0_se', 'TS1_se', 'TS2_se', 'None_se']
summary_dat_cols = param_names + IL_cols + CL_cols + CO_cols + RB_cols


######################
# Part 1 SIMULATIONS #
######################

# Allowed parameter ranges to be sampled from
def get_param_names_ranges(model_name):

    if model_name == 'hier':
        param_names = ['alpha', 'beta', 'forget', 'alpha_high', 'beta_high', 'forget_high']
        param_ranges = pd.DataFrame.from_dict(
            {'alpha': [0, 1], 'beta': [1, 20], 'forget': [0, 1],
             'alpha_high': [0, 1], 'beta_high': [1, 20], 'forget_high': [0, 1]
             })

    elif model_name == 'flat':
        param_names = ['alpha', 'beta', 'forget']
        param_ranges = pd.DataFrame.from_dict({'alpha': [0, 1], 'beta': [1, 20], 'forget': [0, 1]})

    elif model_name == 'Bayes':
        param_names = ['alpha', 'beta', 'forget', 'beta_high', 'forget_high']
        param_ranges = pd.DataFrame.from_dict(
            {'alpha': [0, 1], 'beta': [1, 20], 'forget': [0, 1],
             'beta_high': [1, 20], 'forget_high': [0, 1]
             })

    else:
        raise (NameError, 'model_name must be "flat", "Bayes", or "hier"!')

    return param_names, param_ranges


# Example use
param_names, param_ranges = get_param_names_ranges('hier')
param_names, param_ranges


def get_action_values(seasons, aliens, TS):
    """
    Looks up objective action values and TS values for a numpy array of seasons and aliens, given a specific TS.
    """
    return np.max(TS[seasons, aliens], axis=1)

def get_TS_values(seasons, TS):
    """
    Looks up objective action values and TS values for a numpy array of seasons and aliens, given a specific TS.
    """
    return np.mean(np.max(TS[seasons], axis=2), axis=1)

# Example use
s, a = np.array([0, 1, 2]), np.array([0, 0, 0])
s, a = [0, 1, 2], [0, 0, 0]
# get_action_values(s, a, task.TS), get_TS_values(s, task.TS)


def run_regr_models(seasons, corrects, aliens, actions, trials, TS, regr_phases=['1InitialLearn', '2CloudySeason']):
    """
    Run the regression correct ~ action_value + TS_value, separately for each participant
    Return mean and std over participants.
    """

    regr_coefs = []
    for phase in regr_phases:

        # Get data
        seasons_ph, corrects_ph, aliens_ph, actions_ph = seasons[
                                                             trials[phase]], corrects[trials[phase]], aliens[
                                                             trials[phase]], actions[trials[phase]]
        c = corrects_ph.astype(int)
        Qa = np.array([get_action_values(seasons_ph[trial], aliens_ph[trial], TS)
                       for trial in range(len(seasons_ph))])  # trial x subj
        Qts = np.array([get_TS_values(seasons_ph[trial], TS)
                        for trial in range(len(seasons_ph))])  # trial x subj

        # Run model for each agent
        coefs = []
        for subj in range(c.shape[1]):
            c_subj = c[:, subj]
            Qa_subj = Qa[:, subj]
            Qts_subj = Qts[:, subj]

            X_subj = np.array([Qa_subj, Qts_subj]).T
            y_subj = c[:, subj]

            X_subj, y_subj

            regr = LogisticRegression(solver='lbfgs')
            regr.fit(X_subj, y_subj)
            coefs += [regr.coef_.flatten()]

        coefs = pd.DataFrame(
            data=np.concatenate([np.mean(np.array(coefs), axis=0), np.std(np.array(coefs), axis=0)]),
            index=['{}_{}{}'.format(q, p, s) for q, p, s in
                   zip(2 * ['Qa', 'Qts'], 4 * [phase], 2 * ['_mean'] + 2 * ['_se'])])
        regr_coefs += [coefs]

    return pd.concat(regr_coefs, axis=0)


# Example use
params = np.random.rand(len(param_names))
# seasons, corrects, rewards, aliens, actions, TSs = get_summary(
#     params, param_ranges, n_sim, n_subj, model_name, summary_or_fulldata='fulldata')
# run_regr_models(seasons, corrects, aliens, actions, trials, regr_phases=['1InitialLearn', '2CloudySeason'])


# Function to calculate summaries
def get_summary(task, model_name, parameters, param_ranges,
                n_sim, trials, n_trials, n_trials_, alien_initial_Q, summary_or_fulldata='summary'):

    # Get parmaeters
    for param in parameters:
        if (param < 0) or (param > 1):
            raise ValueError('All parameters must be > 0 and < 1! Got {}.'.format(param))

    ## Scale parameters correctly
    parameters = param_ranges.loc[0] + (param_ranges.loc[1] - param_ranges.loc[0]) * parameters

    beta_shape = (n_sim, 1)  # Q_low_sub.shape -> [n_subj, n_actions]
    beta_high_shape = (n_sim, 1)  # Q_high_sub.shape -> [n_subj, n_TS]
    forget_shape = (n_sim, 1, 1, 1)  # Q_low[0].shape -> [n_subj, n_TS, n_aliens, n_actions]
    forget_high_shape = (n_sim, 1, 1)  # -> [n_subj, n_seasons, n_TS]

    ## Parameters present in all models (flat RL, hier RL, Bayes)
    alpha = parameters['alpha'] * np.ones(n_sim)
    beta = parameters['beta'] * np.ones(beta_shape)
    forget = parameters['forget'] * np.ones(forget_shape)

    ## Deal with parameters that exist only in some models
    try:
        alpha_high = parameters['alpha_high'] * np.ones(n_sim)
    except KeyError:
        alpha_high = np.zeros(n_sim)
    try:
        beta_high = parameters['beta_high'] * np.ones(beta_high_shape)
    except KeyError:
        beta_high = np.zeros(beta_high_shape)
    try:
        forget_high = parameters['forget_high'] * np.ones(forget_high_shape)
    except KeyError:
        forget_high = np.zeros(forget_high_shape)

    # Initial learning phase
    ## Set up data storage
    seasons = np.zeros([n_trials, n_sim], dtype=int)
    corrects = np.zeros([n_trials, n_sim])
    rewards = np.zeros([n_trials, n_sim])
    aliens = np.zeros([n_trials, n_sim], dtype=int)
    actions = np.zeros([n_trials, n_sim], dtype=int)
    TSs = []

    ## Inialize Q-values
    Q_low = alien_initial_Q * np.ones([n_sim, n_TS, n_aliens, n_actions])
    Q_high = alien_initial_Q * np.ones([n_sim, n_seasons, n_TS])

    ## Simulate behavior
    for trial in trials['1InitialLearn']:
        ### Observe stimuli
        season, alien = task.present_stimulus(trial)

        ### Select action & update Q-values
        [Q_low, Q_high, TS, action, correct, reward, p_low] = \
            update_Qs_sim(season, alien,
                          Q_low, Q_high,
                          beta, beta_high, alpha, alpha_high, forget, forget_high,
                          n_sim, n_actions, n_TS, task, alien_initial_Q, model_name)

        ### Store trial data
        seasons[trial] = season
        corrects[trial] = correct
        rewards[trial] = reward
        aliens[trial] = alien
        actions[trial] = action
        TSs += [TS]

    ## Save final Q-values for subsequent phases
    final_Q_low = Q_low.copy()
    final_Q_high = Q_high.copy()

    ## Calculate summaries for initial learning phase
    summary_initial_learn = get_summary_initial_learn(
        seasons[trials['1InitialLearn']], corrects[trials['1InitialLearn']],
        aliens[trials['1InitialLearn']], actions[trials['1InitialLearn']],
        n_seasons, n_sim, trials, task)

    # Cloudy season
    cloudy_season = 0
    for trial in trials['2CloudySeason']:

        ## Observe trial stimuli
        old_season = season.copy()
        season, alien = task.present_stimulus(trial)

        ## Season switches
        if trial == list(trials['2CloudySeason'])[0]:
            season_switches = np.ones(n_sim, dtype=bool)
        else:
            season_switches = season != old_season

        ## Reset Q-values after each season switch to previously memorized values
        if (model_name == 'hier') or (model_name == 'Bayes'):
            Q_high_mem = np.max(final_Q_high, axis=1)  # [n_sim, TS] "memorized" correct TS in each season
            Q_high[season_switches] = alien_initial_Q  # not necessary, but looks cleaner
            Q_high[season_switches, cloudy_season] = Q_high_mem[season_switches]  # n_sim, n_seasons, n_TS

        elif model_name == 'flat':
            Q_low_mem = np.mean(final_Q_low, axis=1)  # [n_sim, n_aliens, n_actions] "memorized" overall task strategy
            Q_low[season_switches] = alien_initial_Q  # not necessary, but looks cleaner
            Q_low[season_switches, cloudy_season] = Q_low_mem[season_switches]

        else:
            raise (NameError, 'Model_name must be "flat", "hier", or "Bayes".')

        ## Update Q-values
        [Q_low, Q_high, TS, action, correct, reward, p_low] = \
            update_Qs_sim(cloudy_season * season, alien,
                          Q_low, Q_high,
                          beta, beta_high, alpha, alpha_high, forget, forget_high,
                          n_sim, n_actions, n_TS, task, alien_initial_Q, model_name)

        ## Store trial data
        seasons[trial] = season
        corrects[trial] = correct
        rewards[trial] = reward
        aliens[trial] = alien
        actions[trial] = action
        TSs += [TS]
    TSs = np.array(TSs)

    ## Calculate summaries for cloudy phase
    summary_cloudy = get_summary_cloudy(
        seasons[trials['2CloudySeason']], corrects[trials['2CloudySeason']],
        aliens[trials['2CloudySeason']], actions[trials['2CloudySeason']],
        n_sim, task)

    # Run and get summaries for competition phase
    comp_data = simulate_competition_phase(model_name, final_Q_high, final_Q_low, task,
                                           n_seasons, n_aliens, n_sim, beta_high,
                                           n_blocks_comp=n_trials_['5Competition'])
    summary_competition = comp_data.groupby('phase').aggregate('mean').reset_index()[
        ['perc_selected_better', 'se']].T.values.flatten()
    summary_competition = pd.DataFrame(data=summary_competition, index=CO_cols)

    # Run and get summaries for rainbow season
    rainbow_dat = simulate_rainbow_phase(n_seasons, model_name, n_sim,
                                         beta, beta_high, final_Q_low, final_Q_high)
    rainbow_dat = pd.DataFrame(data=rainbow_dat.flatten(), index=RB_cols)

    # Run regression models for initial learn and cloudy
    regr_coefs = run_regr_models(
        seasons, corrects, aliens, actions, trials, task.TS, regr_phases=['1InitialLearn', '2CloudySeason'])

    # Return list of summaries
    if summary_or_fulldata == 'summary':
        return pd.concat(
            [parameters, summary_initial_learn, summary_cloudy, summary_competition, rainbow_dat, regr_coefs])
    elif summary_or_fulldata == 'fulldata':
        return seasons, corrects, rewards, aliens, actions, TSs
    else:
        raise ValueError('summary_or_fulldata must either be "summary" or "fulldata".')


# # Example use
# params = np.random.rand(len(param_names))
# get_summary(params, param_ranges, n_sim, n_subj, model_name, summary_or_fulldata='fulldata')
# get_summary(params, param_ranges, n_sim, n_subj, model_name, summary_or_fulldata='summary')

##################################
# Part 2 ANALYZE ALL SIMULATIONS #
##################################

def read_in_all_summaries(filenames):
    """
    # Read in all csv with summaries
    :param filenames:
    :return:
    """

    all_summaries = pd.DataFrame(columns=param_names)
    for filename in filenames:
        summaries = pd.read_csv(filename, index_col=0)
        summaries = summaries.dropna()  # remove empty rows
        all_summaries = all_summaries.append(summaries)
    all_summaries = all_summaries.reset_index(drop=True)

    # Add other measures
    all_summaries['IL_saving_last_minus_first'] = all_summaries['IL_saving_last_trial'] - all_summaries[
        'IL_saving_first_trial']
    all_summaries['IL_perf_TS0_minus_TS1'] = all_summaries['IL_perf_TS0'] - all_summaries['IL_perf_TS1']
    all_summaries['IL_perf_TS0_minus_TS2'] = all_summaries['IL_perf_TS0'] - all_summaries['IL_perf_TS2']
    all_summaries['IL_perf_TS1_minus_TS2'] = all_summaries['IL_perf_TS1'] - all_summaries['IL_perf_TS2']

    all_summaries['CO_season_minus_alien'] = all_summaries['CO_acc_season'] - all_summaries['CO_acc_season_alien']
    all_summaries['IL_first_TS0_minus_TS2'] = all_summaries['IL_first_TS0'] - all_summaries['IL_first_TS2']
    all_summaries['IL_first_TS0_minus_TS1'] = all_summaries['IL_first_TS0'] - all_summaries['IL_first_TS1']
    all_summaries['IL_first_TS1_minus_TS2'] = all_summaries['IL_first_TS1'] - all_summaries['IL_first_TS2']

    all_summaries['CL_first_TS0_minus_TS2'] = all_summaries['CL_first_TS0'] - all_summaries['CL_first_TS2']
    all_summaries['CL_first_TS0_minus_TS1'] = all_summaries['CL_first_TS0'] - all_summaries['CL_first_TS1']
    all_summaries['CL_first_TS1_minus_TS2'] = all_summaries['CL_first_TS1'] - all_summaries['CL_first_TS2']

    all_summaries['CL_slope_TS0minusTS2'] = all_summaries['CL_slope_TS0'] - all_summaries['CL_slope_TS2']
    all_summaries['CL_slope_TS0minusTS1'] = all_summaries['CL_slope_TS0'] - all_summaries['CL_slope_TS1']
    all_summaries['CL_slope_TS1minusTS2'] = all_summaries['CL_slope_TS1'] - all_summaries['CL_slope_TS2']

    for phase in ['1InitialLearn', '2CloudySeason']:
        all_summaries['Qts_minus_a_{}'.format(phase)] = \
            all_summaries['Qts_{}_mean'.format(phase)] - all_summaries['Qa_{}_mean'.format(phase)]

    all_summaries['alpha_high'] = all_summaries['alpha_high'].astype(float)

    return all_summaries


# # Example use
# all_summaries = read_in_all_summaries(filenames)
# print("Number of samples: {} (flat: {}; hier: {}; Bayes: {})".
#       format(all_summaries.shape[0],
#              np.sum(all_summaries['model'] == 'flat'),
#              np.sum(all_summaries['model'] == 'hier'),
#              np.sum(all_summaries['model'] == 'Bayes')
#              ))


def get_human_summaries(n_hum, hum_aliens, hum_seasons, hum_corrects, hum_actions,
                        hum_rewards, hum_rainbow_dat, hum_comp_dat, trials, task, n_seasons):
    # Get human initial learn data
    hum_summary_initial_learn = get_summary_initial_learn(
        hum_seasons[trials['1InitialLearn']], hum_corrects[trials['1InitialLearn']],
        hum_aliens[trials['1InitialLearn']], hum_actions[trials['1InitialLearn']],
        n_seasons, n_hum, trials, task).T

    hum_summary_initial_learn['IL_saving_last_minus_first'] = hum_summary_initial_learn['IL_saving_last_trial'] - \
                                                              hum_summary_initial_learn['IL_saving_first_trial']
    hum_summary_initial_learn['IL_perf_TS0_minus_TS1'] = hum_summary_initial_learn['IL_perf_TS0'] - \
                                                         hum_summary_initial_learn['IL_perf_TS1']
    hum_summary_initial_learn['IL_perf_TS0_minus_TS2'] = hum_summary_initial_learn['IL_perf_TS0'] - \
                                                         hum_summary_initial_learn['IL_perf_TS2']
    hum_summary_initial_learn['IL_perf_TS1_minus_TS2'] = hum_summary_initial_learn['IL_perf_TS1'] - \
                                                         hum_summary_initial_learn['IL_perf_TS2']

    hum_summary_initial_learn['IL_first_TS0_minus_TS2'] = hum_summary_initial_learn['IL_first_TS0'] - \
                                                          hum_summary_initial_learn['IL_first_TS2']
    hum_summary_initial_learn['IL_first_TS0_minus_TS1'] = hum_summary_initial_learn['IL_first_TS0'] - \
                                                          hum_summary_initial_learn['IL_first_TS1']
    hum_summary_initial_learn['IL_first_TS1_minus_TS2'] = hum_summary_initial_learn['IL_first_TS1'] - \
                                                          hum_summary_initial_learn['IL_first_TS2']

    # Get human cloudy data
    hum_summary_cloudy = get_summary_cloudy(
        hum_seasons[trials['2CloudySeason']], hum_corrects[trials['2CloudySeason']],
        hum_aliens[trials['2CloudySeason']], hum_actions[trials['2CloudySeason']],
        n_hum, task).T
    hum_summary_cloudy['CL_first_TS0_minus_TS2'] = hum_summary_cloudy['CL_first_TS0'] - hum_summary_cloudy[
        'CL_first_TS2']
    hum_summary_cloudy['CL_first_TS0_minus_TS1'] = hum_summary_cloudy['CL_first_TS0'] - hum_summary_cloudy[
        'CL_first_TS1']
    hum_summary_cloudy['CL_first_TS1_minus_TS2'] = hum_summary_cloudy['CL_first_TS1'] - hum_summary_cloudy[
        'CL_first_TS2']

    hum_summary_cloudy['CL_slope_TS0minusTS2'] = hum_summary_cloudy['CL_slope_TS0'] - hum_summary_cloudy['CL_slope_TS2']
    hum_summary_cloudy['CL_slope_TS0minusTS1'] = hum_summary_cloudy['CL_slope_TS0'] - hum_summary_cloudy['CL_slope_TS1']
    hum_summary_cloudy['CL_slope_TS1minusTS2'] = hum_summary_cloudy['CL_slope_TS1'] - hum_summary_cloudy['CL_slope_TS2']

    # Get human competition data
    season_cols = [col for col in hum_comp_dat.columns.values if col[0] == "("]
    alien_cols = [col for col in hum_comp_dat.columns.values if col[0] != "("]
    season_perf = np.mean(hum_comp_dat[season_cols], axis=1)
    alien_perf = np.mean(hum_comp_dat[alien_cols], axis=1)
    season_mean = np.mean(season_perf)
    season_se = np.std(season_perf) / np.sqrt(n_hum)
    alien_mean = np.mean(alien_perf)
    alien_se = np.std(alien_perf) / np.sqrt(n_hum)
    comp_t, comp_p = stats.ttest_rel(season_perf, alien_perf)
    hum_summary_competition = pd.DataFrame(
        np.array([[season_mean, alien_mean, season_se, alien_se, np.mean(season_perf - alien_perf)]]),
        columns=CO_cols + ['CO_season_minus_alien'])

    # Get human rainbow data
    # hum_rainbow_dat = pd.DataFrame(np.expand_dims(hum_rainbow_dat.flatten(), axis=0), columns=RB_cols)
    hum_summary_rainbow = get_summary_rainbow(
        n_aliens, n_seasons, hum_rainbow_dat, task)
    hum_summary_rainbow = pd.DataFrame(
        data=np.expand_dims(hum_summary_rainbow, axis=0),
        columns=RB_sum_cols)
    hum_summary_rainbow['TS0_minus_TS1'] = hum_summary_rainbow['TS0'] - hum_summary_rainbow['TS1']
    hum_summary_rainbow['TS0_minus_TS2'] = hum_summary_rainbow['TS0'] - hum_summary_rainbow['TS2']
    hum_summary_rainbow['TS1_minus_TS2'] = hum_summary_rainbow['TS1'] - hum_summary_rainbow['TS2']

    # Get regression models
    hum_regr_coefs = run_regr_models(
        hum_seasons, hum_corrects, hum_aliens, hum_actions, trials, task.TS,
        regr_phases=['1InitialLearn', '2CloudySeason']).T
    for phase in ['1InitialLearn', '2CloudySeason']:
        hum_regr_coefs['Qts_minus_a_{}'.format(phase)] = \
            hum_regr_coefs['Qts_{}_mean'.format(phase)] - hum_regr_coefs['Qa_{}_mean'.format(phase)]

    return hum_summary_initial_learn, hum_summary_cloudy, hum_summary_competition, hum_summary_rainbow, hum_regr_coefs

# # Example use
# (hum_summary_initial_learn, hum_summary_cloudy, hum_summary_competition,
# hum_summary_rainbow, hum_regr_coefs) = get_human_summaries(
#     n_hum, hum_aliens, hum_seasons, hum_corrects, hum_actions,
#     hum_rewards, hum_rainbow_dat, hum_comp_dat)