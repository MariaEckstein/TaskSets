// Assign reward schedule and TS to each season
var hot_season = {
  season: "hot_cloudy",
  randomize_order: true,
  timeline: TSs[TS_rand[0]]
}
var cold_season = {
  season: "cold_cloudy",
  randomize_order: true,
  timeline: TSs[TS_rand[1]]
}
var rainy_season = {
  season: "rainy_cloudy",
  randomize_order: true,
  timeline: TSs[TS_rand[2]]
}

// Create the transition page (point resetter) for each season
var start_cloudy_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img class='background' src='img/hot_cloudy.png'>" +
    "<p class='start_new_season'><i>A new season started!</i></p>"
  ]
}

// Define the numbers of trials for each repetition of each season
first_rep_chunks_cloudy = [  // 8 per alien
  [start_cloudy_season, hot_season, hot_season, hot_season, hot_season,
                     hot_season, hot_season, hot_season, hot_season],
  [start_cloudy_season, cold_season, cold_season, cold_season, cold_season,
                      cold_season, cold_season, cold_season, cold_season],
  [start_cloudy_season, rainy_season, rainy_season, rainy_season, rainy_season,
                       rainy_season, rainy_season, rainy_season, rainy_season]
]
second_rep_chunks_cloudy = [  // 6 per alien
  [start_cloudy_season, hot_season, hot_season, hot_season,
                     hot_season, hot_season, hot_season],
  [start_cloudy_season, cold_season, cold_season, cold_season,
                      cold_season, cold_season, cold_season],
  [start_cloudy_season, rainy_season, rainy_season, rainy_season,
                       rainy_season, rainy_season, rainy_season]
]
third_rep_chunks_cloudy = [  // 4 per alien
  [start_cloudy_season, hot_season, hot_season, hot_season, hot_season],
  [start_cloudy_season, cold_season, cold_season, cold_season, cold_season],
  [start_cloudy_season, rainy_season, rainy_season, rainy_season, rainy_season]
]

// Get the seasons in the pre-randomized order
cloudy_seasons_in_order = [].concat(
  first_rep_chunks_cloudy[season_order_phase1b[1][0]], first_rep_chunks_cloudy[season_order_phase1b[1][1]], first_rep_chunks_cloudy[season_order_phase1b[1][2]],
  second_rep_chunks_cloudy[season_order_phase1b[2][0]], second_rep_chunks_cloudy[season_order_phase1b[2][1]], second_rep_chunks_cloudy[season_order_phase1b[2][2]],
  third_rep_chunks_cloudy[season_order_phase1b[3][0]], third_rep_chunks_cloudy[season_order_phase1b[3][1]], third_rep_chunks_cloudy[season_order_phase1b[3][2]]
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var phase1b_cloudy = {
  type: "phase1",
  phase: "1b",
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: cloudy_seasons_in_order
}
