// Timing variables
// Main experiment
var max_RT = 1500
var feedback_duration = 500
var ITI_duration = 250
// Training block
max_RT_phase2 = max_RT
var max_RT_train = 2 * max_RT
var feedback_duration_train = 1.5 * feedback_duration
var ITI_duration_train = 1.5 * ITI_duration

// Positions on the screen
var sad_lefts = [0, 280, 520]
var sad_left = 260
var points = [0, 0, 0, 0]

// point counters
var c_alien_tops = [20, 80, 140, 200, 260]
var point_tops = [0, 60, 120, 180, 240]

// key ids
left_key = 74;
middle_key = 75;
right_key = 76;

var timeout_message = "<p class='start_new_season'>Use <i>j, k</i>, or <i>l</i> to respond.</p>"

// numbers of trials
n_blocks_phase1 = 3;  //3 how often will each season be repeated?
n_trials_phase1 = 13;  //13 how many trials per season per alien?

n_blocks_cloudy = 3;  //2 how often will each season be repeated?
n_trials_cloudy = 10;  //10 how many trials per season per alien?

n_blocks_refreshers = 1;  //2 how often will each season be repeated?
n_trials_refreshers = 7;  //7 how many trials per season per alien?
