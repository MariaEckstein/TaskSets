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
ten_trial_cloudy = [
  [start_cloudy_season, hot_season, hot_season, hot_season, hot_season, hot_season,
                     hot_season, hot_season, hot_season, hot_season, hot_season],
  [start_cloudy_season, cold_season, cold_season, cold_season, cold_season, cold_season,
                      cold_season, cold_season, cold_season, cold_season, cold_season],
  [start_cloudy_season, rainy_season, rainy_season, rainy_season, rainy_season, rainy_season,
                       rainy_season, rainy_season, rainy_season, rainy_season, rainy_season]
]

// Get the seasons in the pre-randomized order
cloudy_seasons_in_order = [].concat(
  ten_trial_cloudy[season_order_phase1b[1][0]], ten_trial_cloudy[season_order_phase1b[1][1]], ten_trial_cloudy[season_order_phase1b[1][2]],
  ten_trial_cloudy[season_order_phase1b[2][0]], ten_trial_cloudy[season_order_phase1b[2][1]], ten_trial_cloudy[season_order_phase1b[2][2]],
  ten_trial_cloudy[season_order_phase1b[3][0]], ten_trial_cloudy[season_order_phase1b[3][1]], ten_trial_cloudy[season_order_phase1b[3][2]],
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var phase2_cloudy = {
  type: "feed-aliens",
  phase: "2CloudySeason",
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: cloudy_seasons_in_order
}
