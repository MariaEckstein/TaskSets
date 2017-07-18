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
start_new_season_page =
    "style='position:fixed; top:0px; left:0px; bottom:0px; right:0px; z=-10' " +
    "height='100%' width='100%'>" +
  "<p style='position:relative; border: 250px solid transparent; z=10; font-size:60px'><i>New season!</i></p>"

var start_hot_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img src=img/hot.png " +
      start_new_season_page
  ]
}
var start_rainy_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img src=img/rainy.png " +
      start_new_season_page
  ]
}
var start_cold_season = {
  type: "start_new_season",
  show_clickable_nav: true,
  pages: [
    "<img src=img/cold.png " +
      start_new_season_page
  ]
}

// Define the numbers of trials for each repetition of each season
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
  first_rep_chunks[season_order[0][0]], first_rep_chunks[season_order[0][1]], first_rep_chunks[season_order[0][2]],
  second_rep_chunks[season_order[1][0]], second_rep_chunks[season_order[1][1]], second_rep_chunks[season_order[1][2]],
  third_rep_chunks[season_order[2][0]], third_rep_chunks[season_order[2][1]], third_rep_chunks[season_order[2][2]]
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var all_seasons = {
  type: "categorize-alienzzz2",
  aliens: phase1_aliens,
  timing_response: 10000,
  timing_feedback_duration: 750,
  timeout_message: "<p style='text-align:center; font-size:40px; z=10'>" +
                   "Please respond faster next time! </p>",
  timeline: seasons_in_order
}
