// Create timeline for training block
training_timeline = []
for (i = 0; i < n_blocks_training; i ++) {
  training_timeline.push({timeline: TS_train, randomize_order: true,})
}
training_block = {
  type: "feed-aliens",
  phase: "0Training",
  season: "training",
  choices: [left_key, middle_key, right_key],
  aliens: pr_alien_names,
  show_stim_with_feedback: true,
  timing_feedback_duration: feedback_duration_train,
  timing_response: max_RT_train,
  timeout_message: timeout_message,
  timeline: training_timeline
}


// Create timeline for InitialLearn: n_blocks_phase1 blocks
var phase1_initial_learn = {
    type: "feed-aliens",
    phase: "1InitialLearning",
    choices: [left_key, middle_key, right_key],
    aliens: alien_names,
    timing_response: max_RT_initial_learn,
    timing_feedback_duration: feedback_duration,
    timeout_message: timeout_message,
    timeline: create_feed_aliens_timeline(n_blocks=n_blocks_phase1,
                                          n_trials_per_alien=n_trials_per_alien_phase1)
}

// Create timeline for Cloudy Season: n_blocks_cloudy cloudy blocks
var phase2_cloudy = {
  type: "feed-aliens",
  phase: "2CloudySeason",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names,
  timing_response: max_RT_initial_learn,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: create_feed_aliens_timeline(n_blocks=n_blocks_cloudy,
                                        n_trials_per_alien=n_trials_per_alien_cloudy,
                                        block_type="cloudy")
}

// Create timeline for mixed block at the end: n_trial_mixed trials
mixed_timeline = []
for (i = 0; i < n_blocks_mixed; i ++) {
  mixed_timeline = mixed_timeline.concat(
                    create_feed_aliens_timeline(n_blocks=1,
                                                n_trials_per_alien=n_trials_per_season_alien_mixed,
                                                block_type='mixed'))
}

var phase6_mixed_block = {
    type: "feed-aliens",
    phase: "Mixed",
    choices: [left_key, middle_key, right_key],
    aliens: alien_names,
    timing_response: max_RT_mixed,
    timing_feedback_duration: feedback_duration,
    timeout_message: timeout_message,
    timeline: mixed_timeline,
}

// Create timeline for Refershers: n_blocks_refreshers blocks
var refresher_block_2 = {
    type: "feed-aliens",
    phase: "Refresher2",
    choices: [left_key, middle_key, right_key],
    aliens: alien_names,
    timing_response: max_RT_initial_learn,
    timing_feedback_duration: feedback_duration,
    timeout_message: timeout_message,
    timeline: create_feed_aliens_timeline(n_blocks=n_blocks_refreshers,
                                          n_trials_per_alien=n_trials_per_alien_refreshers)
}

var refresher_block_3 = {
    type: "feed-aliens",
    phase: "Refresher3",
    choices: [left_key, middle_key, right_key],
    aliens: alien_names,
    timing_response: max_RT_initial_learn,
    timing_feedback_duration: feedback_duration,
    timeout_message: timeout_message,
    timeline: create_feed_aliens_timeline(n_blocks=n_blocks_refreshers,
                                          n_trials_per_alien=n_trials_per_alien_refreshers)
}

// Create timeline for Rainbow Season: x rainbow blocks, without feedback
rainbow_trials = [
    {sad_alien: 0},
    {sad_alien: 1},
    {sad_alien: 2},
    {sad_alien: 3},
]
rainbow_timeline = []
for (i = 0; i < n_blocks_rainbow; i ++) {
  rainbow_timeline = rainbow_timeline.concat(
    {timeline: rainbow_trials, randomize_order: true}
  )
}
var rainbow_season_phase5 = {
    type: "feed-aliens",
    phase: "5RainbowSeason",
    season: "rainbow",  // necessary to hide feedback
    aliens: alien_names,
    choices: [left_key, middle_key, right_key],
    show_stim_with_feedback: false,
    timing_response: max_RT_rainbow,
    timing_feedback_duration: feedback_duration,
    timeout_message: timeout_message,
    timeline: rainbow_timeline
}
