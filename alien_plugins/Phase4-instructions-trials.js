// Instruction slides
instructions1 =
  "<center><p>Congratulations! <i>You won</i> the competition!</p>" +
  "<p>The aliens reward you with all kinds of beautiful prizes. " +
  "You feel honored.</p>"

instructions2 =
  "<center><p>There is a big party after the annual competition, " +
  "which attracts visitors from many different planets. " +
  "You decide to stay for the party. You will <i>not only help the aliens grow " +
  "that you already know, but also the visiting aliens that you haven't met yet</i>.</p>" +
  "<p>Note that after the annual competition, aliens won't show you how much they grow. " +
  "This means that <i>you won't see the effects of your actions</i>. " +
  "Still do your best to <i>help each alien grow as much as possible!</i></p>" +
  "<p>Press 'Next' when you are ready to start!</p></center>"

after_phase4 =
  "<center><p>Thank you for taking care of all these aliens and their visitors! You did a fantastic job!</p>" +
  "[happy aliens?]"

var phase4_instructions = {
  type: 'instructions',
  pages: [
      instructions1,
      instructions2,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

var phase4_after = {
  type: 'instructions',
  pages: [
      after_phase4,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Get the seasons in the pre-randomized order
if (!short_version) {  // long version
  TS1_phase4 = [].concat(
    TS1,
    {key_answer: "", sad_alien: 4},
    {key_answer: "", sad_alien: 5},
  )
  TS2_phase4 = [].concat(
    TS2,
    {key_answer: "", sad_alien: 4},
    {key_answer: "", sad_alien: 5},
  )
  TS3_phase4 = [].concat(
    TS3,
    {key_answer: "", sad_alien: 4},
    {key_answer: "", sad_alien: 5},
  )
} else {  // short version
  TS1_phase4 = [
    TS1[0],
    {key_answer: "", sad_alien: 4},
  ]
  TS2_phase4 = [
    TS2[0],
    {key_answer: "", sad_alien: 4},
  ]
  TS3_phase4 = [
    TS3[0],
    {key_answer: "", sad_alien: 4},
  ]
}
TSs_phase4 = [TS1_phase4, TS2_phase4, TS3_phase4]

hot_season_phase4 = {
  season: "hot",
  randomize_order: true,
  timeline: TSs_phase4[TS_rand[0]]
}
cold_season_phase4 = {
  season: "cold",
  randomize_order: true,
  timeline: TSs_phase4[TS_rand[1]]
}
rainy_season_phase4 = {
  season: "rainy",
  randomize_order: true,
  timeline: TSs_phase4[TS_rand[2]]
}

// Define the numbers of trials for each repetition of each season
one_trial_chunk = [  // 1 trial per alien in each season
  [start_hot_season, hot_season_phase4],
  [start_cold_season, cold_season_phase4],
  [start_rainy_season, rainy_season_phase4]
]

// Get the seasons in the pre-randomized order
seasons_in_order_phase4 = [].concat(
  one_trial_chunk[season_order_phase4[1][0]], one_trial_chunk[season_order_phase4[1][1]], one_trial_chunk[season_order_phase4[1][2]],
  one_trial_chunk[season_order_phase4[2][0]], one_trial_chunk[season_order_phase4[2][1]], one_trial_chunk[season_order_phase4[2][2]]
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var all_seasons_phase4 = {
  type: "feed-aliens",
  phase: "4NewAliens",
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names.concat("alien10", "alien8"),
  show_stim_with_feedback: false,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order_phase4
}
