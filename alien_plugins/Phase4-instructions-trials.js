
// Instruction slides
instructions1 =
  "<center><p>Congratulations! You won the competition!</p>" +
  "[cheering?]" +
  "<p>The aliens reward you with all kinds of beautiful prices. " +
  "You feel honored.</p>"

instructions2 =
  "<center><p>The party for the annual competition is still ongoing, " +
  "and having had such a wonderful time, " +
  "you decide to stay just a little longer with the aliens, helping them grow.</p>" +
  "<p>Note that after the annual competition, " +
  "aliens won't show how you much they grow. " +
  "This means that you won't see the effects of your actions. " +
  "Still do your best to help each alien grow as much as possible, " +
  "using your previous experience!</p>" +
  "<p>Also note that the competition attracts many visitors, " +
  "so you will have to take care of new aliens. " +
  "Try your best to help each alien grow as much as you can, old or new!</p> " +
  "<p>Press 'Next' when you are ready to start!</p></center>"

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
if (subjID != 0) {  // long version
  TS1_phase4 = TSs[0].concat(
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
  )
  TS2_phase4 = TSs[1].concat(
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
  )
  TS3_phase4 = TSs[2].concat(
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
    {key_answer: "", sad_alien: 3},
    {key_answer: "", sad_alien: 4},
  )
} else {  // short version
  TS1_phase4 = TSs[0].concat(
    {key_answer: "", sad_alien: 3},
  )
  TS2_phase4 = TSs[1].concat(
    {key_answer: "", sad_alien: 3},
  )
  TS3_phase4 = TSs[2].concat(
    {key_answer: "", sad_alien: 3},
  )
  console.log(TS3_phase4.length, TS3_phase4[0], TS3_phase4[1])
}
TSs_phase4 = [TS1_phase4, TS2_phase4, TS3_phase4]

hot_season_phase4 = {
  season: "hot",
  feedback_amounts: season_rewards[0],
  randomize_order: true,
  timeline: TSs_phase4[TS_rand_phase4[0]]
}
cold_season_phase4 = {
  season: "cold",
  feedback_amounts: season_rewards[1],
  randomize_order: true,
  timeline: TSs_phase4[TS_rand_phase4[1]]
}
rainy_season_phase4 = {
  season: "rainy",
  feedback_amounts: season_rewards[2],
  randomize_order: true,
  timeline: TSs_phase4[TS_rand_phase4[2]]
}

// Define the numbers of trials for each repetition of each season
// first_rep_chunks = [
//   [start_hot_season, hot_season_phase4, hot_season_phase4, hot_season_phase4],
//   [start_cold_season, cold_season_phase4, cold_season_phase4, cold_season_phase4],
//   [start_rainy_season, rainy_season_phase4, rainy_season_phase4, rainy_season_phase4]
// ]
second_rep_chunks = [
  [start_hot_season, hot_season_phase4, hot_season_phase4],
  [start_cold_season, cold_season_phase4, cold_season_phase4],
  [start_rainy_season, rainy_season_phase4, rainy_season_phase4]
]
third_rep_chunks = [
  [start_hot_season, hot_season_phase4],
  [start_cold_season, cold_season_phase4],
  [start_rainy_season, rainy_season_phase4]
]

// Get the seasons in the pre-randomized order
seasons_in_order_phase4 = [].concat(
  // first_rep_chunks[season_order_phase4[0][0]], first_rep_chunks[season_order_phase4[0][1]], first_rep_chunks[season_order_phase4[0][2]],
  second_rep_chunks[season_order_phase4[1][0]], second_rep_chunks[season_order_phase4[1][1]], second_rep_chunks[season_order_phase4[1][2]],
  third_rep_chunks[season_order_phase4[2][0]], third_rep_chunks[season_order_phase4[2][1]], third_rep_chunks[season_order_phase4[2][2]]
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var all_seasons_phase4 = {
  type: "phase1",
  aliens: phase1_aliens.concat(alien7, alien8),
  show_stim_with_feedback: false,
  timing_response: 10000,
  timing_feedback_duration: 200,
  timeout_message: "<p style='text-align:center; font-size:40px; z=10'>" +
                   "Please respond faster next time! </p>",
  timeline: seasons_in_order_phase4
}
