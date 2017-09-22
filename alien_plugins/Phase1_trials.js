// Assign reward schedule and TS to each season
var hot_season = {
  season: "hot",
  randomize_order: true,
  timeline: TSs[TS_rand[0]]
}
var cold_season = {
  season: "cold",
  randomize_order: true,
  timeline: TSs[TS_rand[1]]
}
var rainy_season = {
  season: "rainy",
  randomize_order: true,
  timeline: TSs[TS_rand[2]]
}

// Create the transition page (point resetter) for each season
var start_hot_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img class='background' src='img/hot.png'>" +
    "<p class='start_new_season'><i>This is the hot season!</i></p>"
  ]
}
var start_rainy_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img class='background' src='img/rainy.png'>" +
    "<p class='start_new_season'><i>This is the rainy season!</i></p>"
  ]
}
var start_cold_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img class='background' src='img/cold.png'>" +
    "<p class='start_new_season'><i>This is the cold season!</i></p>"
  ]
}

// Define a chunk of 10 trials per season
ten_trial_chunk = [
  [start_hot_season, hot_season, hot_season, hot_season, hot_season, hot_season,
                     hot_season, hot_season, hot_season, hot_season, hot_season],
  [start_cold_season, cold_season, cold_season, cold_season, cold_season, cold_season,
                      cold_season, cold_season, cold_season, cold_season, cold_season],
  [start_rainy_season, rainy_season, rainy_season, rainy_season, rainy_season, rainy_season,
                       rainy_season, rainy_season, rainy_season, rainy_season, rainy_season]
]
one_trial_chunk = [
  [start_hot_season, hot_season],
  [start_cold_season, cold_season],
  [start_rainy_season, rainy_season]
]

// Get the seasons in the pre-randomized order
seasons_in_order = [].concat(
  ten_trial_chunk[season_order[0][0]], ten_trial_chunk[season_order[0][1]], ten_trial_chunk[season_order[0][2]],
  ten_trial_chunk[season_order[1][0]], ten_trial_chunk[season_order[1][1]], ten_trial_chunk[season_order[1][2]],
  ten_trial_chunk[season_order[2][0]], ten_trial_chunk[season_order[2][1]], ten_trial_chunk[season_order[2][2]],
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var phase1_initial_learn = {
  type: "feed-aliens",
  phase: "1InitialLearning",
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timing_post_trial: ITI_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order
}
