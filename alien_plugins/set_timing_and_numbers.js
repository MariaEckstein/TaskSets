// Timing variables
// Main experiment
max_RT_initial_learn = 1500
max_RT_pick_aliens = 2 * max_RT_initial_learn
max_RT_rainbow = 2 * max_RT_initial_learn
feedback_duration = 400  //500
ITI_duration = 200  //250
// Training block
max_RT_train = 2 * max_RT_initial_learn
feedback_duration_train = 1.5 * feedback_duration
ITI_duration_train = 1.5 * ITI_duration

// Positions on the screen
sad_lefts = [0, 280, 520]
sad_left = 260
points = [0, 0, 0, 0]

// point counters
c_alien_tops = [20, 80, 140, 200, 260]
point_tops = [0, 60, 120, 180, 240]

// key ids
left_key = 74;
middle_key = 75;
right_key = 76;

timeout_message = "<p class='start_new_season'>Please use <i>j, k</i>, or <i>l</i> to respond.</p>"

// numbers of trials
n_blocks_training = 8;
n_trials_per_alien_phase1 = 12;  //13 how many trials per season per alien?
n_blocks_phase1 = 3;

n_trials_per_alien_cloudy = 9;  //10 how many trials per season per alien?
n_blocks_cloudy = 3;  //2 how often will each season be repeated?

n_trials_per_alien_refreshers = 4;  //7 how many trials per season per alien?
n_blocks_refreshers = 2;  //2 how often will each season be repeated?

n_blocks_rainbow = 3;
