
// Define Initial Learn
var phase1_initial_learn = {
  type: "feed-aliens",
  phase: "1InitialLearning",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timing_post_trial: ITI_duration,
  timeout_message: timeout_message,
  timeline: create_feed_aliens_timeline(TS_order, n_blocks_phase1, n_trials_phase1)
}

// Define Cloudy season
var phase2_cloudy = {
  type: "feed-aliens",
  phase: "2CloudySeason",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: create_feed_aliens_timeline(TS_order_cloudy, n_blocks_cloudy, n_trials_cloudy, "cloudy")
}

// Define Refreshers
var refresher_block_2 = {
  type: "feed-aliens",
  phase: "Refresher2",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: create_feed_aliens_timeline(TS_order_refresher2, n_blocks_refreshers, n_trials_refreshers)
}

var refresher_block_3 = {
  type: "feed-aliens",
  phase: "Refresher3",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: create_feed_aliens_timeline(TS_order_refresher2, n_blocks_refreshers, n_trials_refreshers)
}

// Define rainbow season
rainbow_timeline = [
  {sad_alien: 0},
  {sad_alien: 1},
  {sad_alien: 2},
  {sad_alien: 3},
]
var rainbow_season_phase5 = {
  type: "feed-aliens",
  phase: "5RainbowSeason",
  season: "rainbow",
  aliens: alien_names,
  choices: [left_key, middle_key, right_key],
  randomize_order: true,
  show_stim_with_feedback: false,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: rainbow_timeline,
}
