// Timing variables
// Main experiment
max_RT_initial_learn = 1500  // v1.0: 1500; v2.0: 1800; v3.0: 1500
max_RT_competition = 2 * max_RT_initial_learn  // v1.0: max_RT; v2.0: 2 * max_RT
max_RT_rainbow = 2 * max_RT_initial_learn  // v1.0: max_RT; v2.0: 2 * max_RT
max_RT_mixed = 2 * max_RT_initial_learn  // v3.0: 2 * max_RT
feedback_duration = 500  // v1.0: 500; v2.0: 400; v3.0: 500
ITI_duration = 250  // v1.0: 250; v2.0: 200; v3.0: 250
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

timeout_message = "<p class='start_new_season'>Please respond using <i>j, k</i>, or <i>l</i>.</p>"
timeout_message_comp = "<p class='start_new_season'>Please respond using <i>j</i> or <i>l</i>.</p>"

// numbers of trials
n_blocks_training = 10;  // v1.0: 10; v2.0: 8; v3.0: 10

n_trials_per_alien_phase1 = 13;  // all vs: 13 how many trials per season per alien?
n_blocks_phase1 = 3;  // all vs: 3

n_trials_per_alien_cloudy = 10;  // all vs: 10 how many trials per season per alien?
n_blocks_cloudy = 3;  // v1.0: 2; v2.0: 3; v3.0: 3 how often will each season be repeated?

n_trials_per_alien_refreshers = 7;  // all vs: 7 how many trials per season per alien?
n_blocks_refreshers = 2;  // all vs: 2 how often will each season be repeated?

n_blocks_rainbow = 3;  // v1.0: 3; v2.0: 6; v3.0: 3

n_trials_per_season_alien_mixed = 7;  // v3.0: 7
n_blocks_mixed = 3; // v3.0: 3

// TS orders
TS_orders = [
  [0, 1, 2, 1, 2, 0, 2, 0, 1],
  [1, 2, 0, 2, 0, 1, 0, 1, 2],
  [2, 0, 1, 0, 1, 2, 1, 2, 0],
  [0, 2, 1, 2, 1, 0, 1, 0, 2],
  [1, 0, 2, 0, 2, 1, 2, 1, 0],
  [2, 1, 0, 1, 0, 2, 0, 2, 1]
]
