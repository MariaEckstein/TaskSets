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
    timeline: [].concat(  // 3 normal blocks, 2 mixed in-between
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_phase1),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_phase1 / 4,
                               block_type="mixed"),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_phase1),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_phase1 / 4,
                               block_type="mixed"),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_phase1)
      )
}

// Define Cloudy season
var phase2_cloudy = {
  type: "feed-aliens",
  phase: "2CloudySeason",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timing_post_trial: ITI_duration,
  timeout_message: timeout_message,
  timeline: [].concat(
    create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                             n_trials_per_alien=n_trials_per_alien_cloudy,
                             block_type="cloudy"),
    create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                             n_trials_per_alien=n_trials_per_alien_cloudy,
                             block_type="cloudy"),
    create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                             n_trials_per_alien=n_trials_per_alien_cloudy,
                             block_type="cloudy")
    )
}

// Define Refreshers
var refresher_block_2 = {
    type: "feed-aliens",
    phase: "Refresher2",
    choices: [left_key, middle_key, right_key],
    aliens: alien_names,
    timing_response: max_RT,
    timing_feedback_duration: feedback_duration,
    timing_post_trial: ITI_duration,
    timeout_message: timeout_message,
    timeline: [].concat(  // 2 normal blocks, 1 mixed in-between
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_refreshers),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_refreshers / 2,
                               block_type="mixed"),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_refreshers)
      )
}

var refresher_block_3 = {
    type: "feed-aliens",
    phase: "Refresher3",
    choices: [left_key, middle_key, right_key],
    aliens: alien_names,
    timing_response: max_RT,
    timing_feedback_duration: feedback_duration,
    timing_post_trial: ITI_duration,
    timeout_message: timeout_message,
    timeline: [].concat(  // 2 normal blocks, 1 mixed in-between
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_refreshers),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_refreshers / 2,
                               block_type="mixed"),
      create_feed_aliens_block(TS_order=jsPsych.randomization.shuffle(TS_names),
                               n_trials_per_alien=n_trials_per_alien_refreshers)
      )
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
    show_stim_with_feedback: false,
    timing_response: max_RT,
    timing_feedback_duration: feedback_duration,
    timing_post_trial: ITI_duration,
    timeout_message: timeout_message,
    timeline: [
      {timeline: rainbow_timeline, randomize_order: true},
      {timeline: rainbow_timeline, randomize_order: true},
      {timeline: rainbow_timeline, randomize_order: true},
    ],
}
