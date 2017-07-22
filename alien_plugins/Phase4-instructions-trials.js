
// Instruction slides
instructions1 =
  "<center><p>Congratulations! You won the competition!</p>" +
  "[cheering?]" +
  "<p>The aliens reward you with all kinds of beautiful prizes. " +
  "You feel honored.</p>"

instructions2 =
  "<center><p>There is a big party after the annual competition, " +
  "which attracts visitors from many different planets. " +
  "You decide to stay for this party to help the old and new aliens grow.</p>" +
  "<p>Note that after the annual competition, aliens won't show how you much they grow. " +
  "This means that you won't see the effects of your actions. " +
  "Still do your best to help each alien grow as much as possible!</p>" +
  "<p>Press Next when you are ready to start!</p></center>"

var phase4_instructions = {
  type: 'instructions',
  pages: [
      instructions1,
      instructions2,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Get the seasons in the pre-randomized order
if (!short_version) {  // long version
  TS1_phase4 = [
    TS1[0],  // {key_answer: button_names[0], sad_alien: 2},
    TS1[1],  // {key_answer: button_names[1], sad_alien: 1},
    TS1[2],  // {key_answer: button_names[2], sad_alien: 0},
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
  ]
  TS2_phase4 = [
    TS2[0],
    TS2[1],
    TS2[2],
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
  ]
  TS3_phase4 = [
    TS3[0],
    TS3[1],
    TS3[2],
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
  ]
} else {  // short version
  TS1_phase4 = [
    TS1[0],
    {key_answer: "", sad_alien: 3},
  ]
  TS2_phase4 = [
    TS2[0],
    {key_answer: "", sad_alien: 3},
  ]
  TS3_phase4 = [
    TS3[0],
    {key_answer: "", sad_alien: 3},
  ]
}
TSs_phase4 = [TS1_phase4, TS2_phase4, TS3_phase4]

hot_season_phase4 = {
  season: "hot",
  feedback_amounts: season_rewards[0],
  randomize_order: true,
  timeline: TSs_phase4[TS_rand[0]]
}
cold_season_phase4 = {
  season: "cold",
  feedback_amounts: season_rewards[1],
  randomize_order: true,
  timeline: TSs_phase4[TS_rand[1]]
}
rainy_season_phase4 = {
  season: "rainy",
  feedback_amounts: season_rewards[2],
  randomize_order: true,
  timeline: TSs_phase4[TS_rand[2]]
}

// Define the numbers of trials for each repetition of each season
third_rep_chunks = [
  [start_hot_season, hot_season_phase4],  // 5 trials
  [start_cold_season, cold_season_phase4],  // 5 trials
  [start_rainy_season, rainy_season_phase4]  // 5 trials
]

// Get the seasons in the pre-randomized order
seasons_in_order_phase4 = [].concat(
  third_rep_chunks[season_order_phase4[1][0]], third_rep_chunks[season_order_phase4[1][1]], third_rep_chunks[season_order_phase4[1][2]],
  third_rep_chunks[season_order_phase4[2][0]], third_rep_chunks[season_order_phase4[2][1]], third_rep_chunks[season_order_phase4[2][2]]
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var all_seasons_phase4 = {
  type: "phase1",
  phase: 4,
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names.concat("alien7", "alien8"),
  show_stim_with_feedback: false,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order_phase4
}
