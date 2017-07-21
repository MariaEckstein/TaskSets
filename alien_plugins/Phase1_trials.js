// Assign reward schedule and TS to each season
var hot_season = {
  season: "hot",
  feedback_amounts: season_rewards[0],
  randomize_order: true,
  timeline: TSs[TS_rand[0]]
}
var cold_season = {
  season: "cold",
  feedback_amounts: season_rewards[1],
  randomize_order: true,
  timeline: TSs[TS_rand[1]]
}
var rainy_season = {
  season: "rainy",
  feedback_amounts: season_rewards[2],
  randomize_order: true,
  timeline: TSs[TS_rand[2]]
}

// Create the transition page (point resetter) for each season
var start_hot_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img class='background' src='img/hot.png'>" +
    "<p class='start_new_season'><i>It is now the hot season!</i></p>"
  ]
}
var start_rainy_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img class='background' src='img/rainy.png'>" +
    "<p class='start_new_season'><i>It is now the rainy season!</i></p>"
  ]
}
var start_cold_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img class='background' src='img/cold.png'>" +
    "<p class='start_new_season'><i>It is now the cold season!</i></p>"
  ]
}

// Define the numbers of trials for each repetition of each season
zeroeth_rep_chunks = [
  [start_hot_season, hot_season, hot_season, hot_season, hot_season],
  [start_cold_season, cold_season, cold_season, cold_season, cold_season],
  [start_rainy_season, rainy_season, rainy_season, rainy_season, rainy_season]
]
first_rep_chunks = [
  [start_hot_season, hot_season, hot_season, hot_season],
  [start_cold_season, cold_season, cold_season, cold_season],
  [start_rainy_season, rainy_season, rainy_season, rainy_season]
]
second_rep_chunks = [
  [start_hot_season, hot_season, hot_season],
  [start_cold_season, cold_season, cold_season],
  [start_rainy_season, rainy_season, rainy_season]
]
third_rep_chunks = [
  [start_hot_season, hot_season],
  [start_cold_season, cold_season],
  [start_rainy_season, rainy_season]
]

// Get the seasons in the pre-randomized order
seasons_in_order = [].concat(
  zeroeth_rep_chunks[season_order[0][0]], zeroeth_rep_chunks[season_order[0][1]], zeroeth_rep_chunks[season_order[0][2]],
  first_rep_chunks[season_order[1][0]], first_rep_chunks[season_order[1][1]], first_rep_chunks[season_order[1][2]],
  second_rep_chunks[season_order[2][0]], second_rep_chunks[season_order[2][1]], second_rep_chunks[season_order[2][2]],
  third_rep_chunks[season_order[3][0]], third_rep_chunks[season_order[3][1]], third_rep_chunks[season_order[3][2]]
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var all_seasons = {
  type: "phase1",
  phase: 1,
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: "<p style='text-align:center; font-size:40px; z=10'>" +
                   "Please respond faster next time! </p>",
  timeline: seasons_in_order
}
