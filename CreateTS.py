import numpy as np

n_aliens = 4
n_seasons = 3
n_actions = 3


def create_action_matrix():
    actions = np.array(['A', 'A', 'A', 'A',
                        'B', 'B', 'B', 'B',
                        'C', 'C', 'C', 'C'])
    action_matrix = np.random.choice(actions, [n_seasons, n_aliens], replace=False)
    return action_matrix

action_matrix = np.array([['C', 'B', 'A', 'B'],
                          ['A', 'C', 'B', 'A'],
                          ['B', 'A', 'C', 'C']])
action_matrix = np.array([['B', 'C', 'A', 'A'],
                          ['C', 'B', 'C', 'B'],
                          ['C', 'A', 'B', 'A']])


def create_balanced_TS(iterations):
    TSs = []

    for i in range(iterations):

        TS = np.ceil(10 * np.random.rand(n_seasons, n_aliens))  # numbers from 1-10

        sum_is_60 = np.sum(TS) == 60
        no_ones = not np.any(TS == 1)
        if sum_is_60 and no_ones:
            ali_sums = np.sum(TS, 0)
            sea_sums = np.sum(TS, 1)
            act_sums = [np.sum(TS[action_matrix == action]) for action in ['A', 'B', 'C']]

            ali_sums_equal = np.all([ali_sums[sum1] == ali_sums[sum2] for sum1 in range(n_aliens) for sum2 in range(n_aliens)])
            act_sums_equal = np.all([act_sums[sum1] == act_sums[sum2] for sum1 in range(n_actions) for sum2 in range(n_actions)])

            if act_sums_equal and ali_sums_equal and np.any(sea_sums == 15) and np.any(sea_sums == 25):
                TSs.append(TS)

    return TSs

create_balanced_TS(10**9)

# TS1 = np.array([[4, 6, 8, 5],    # 23
#                 [1, 4, 2, 6],    # 13
#                 [7, 2, 2, 1]])   # 12
# TS2 = np.array([[5, 3, 6, 5],    # 19
#                 [6, 4, 7, 9],    # 26
#                 [4, 8, 2, 1]])   # 15
# TS3 = np.array([[2.,  4.,  9.,  5.],   # 20
#                 [7.,  9.,  3.,  6.],   # 25
#                 [6.,  2.,  3.,  4.]])  # 15


# np.sum(TS1, 0)
# [np.sum(TS1[action_matrix == action]) for action in ['A', 'B', 'C']]
# np.sum(TS1, 1)
# np.sum(TS2, 0)
# [np.sum(TS2[action_matrix == action]) for action in ['A', 'B', 'C']]
# np.sum(TS2, 1)
