
// Get the order of the seasons
cloudy_seasons_in_order = []
for (block = 0; block < season_names.length * n_blocks_cloudy; block ++) {  // iterate through season_order, which indicates in which block each season should be presented

  season_index = season_order_cloudy[block]  // 0, 1, or 2
  season_name = season_names_cloudy[season_index]  // "hot", "cold", or "rainy"

  trials = [{
    type: "start_new_season",
    show_clickable_nav: true,
    pages: [
      "<img class='background' src='img/" + season_name + ".png'>" +
      "<p class='start_new_season'><i>A new season started!</i></p>"
    ]
  }]

  for (trial = 0; trial < n_trials_cloudy; trial ++) {
    trials.push({
      season: season_name,
      randomize_order: true,
      timeline: TSs[TS_rand[season_index]]
    })
  }

  cloudy_seasons_in_order = cloudy_seasons_in_order.concat(trials)
}

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var phase2_cloudy = {
  type: "feed-aliens",
  phase: "2CloudySeason",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names_rand,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: cloudy_seasons_in_order
}
