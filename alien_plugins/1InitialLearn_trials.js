
// Get the order of the seasons
seasons_in_order = []
for (block = 0; block < season_names.length * n_blocks_phase1; block ++) {  // iterate through season_order, which indicates in which block each season should be presented

  season_index = season_order[block]  // 0, 1, or 2
  season_name = season_names[season_index]  // "hot", "cold", or "rainy"

  trials = [{
    type: "start_new_season",
    show_clickable_nav: true,
    pages: [
      "<img class='background' src='img/" + season_name + ".png'>" +
      "<p class='start_new_season'><i>This is the " + season_name + " season!</i></p>"
    ]
  }]

  for (trial = 0; trial < n_trials_phase1; trial ++) {
    trials.push({
      season: season_name,
      randomize_order: true,
      timeline: TSs[TS_rand[season_index]]
    })
  }

  seasons_in_order = seasons_in_order.concat(trials)
}

// Define jsPsych object
var phase1_initial_learn = {
  type: "feed-aliens",
  phase: "1InitialLearning",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names_rand,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timing_post_trial: ITI_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order
}
