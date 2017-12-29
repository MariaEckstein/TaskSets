
// Instruction slides
phase3_text =
  "<center><p>Great job making all these choices! You are now ready to enter the competition.</p>" +
  "<p><i>Let each of your aliens grow as much as possible to win the competition!</i> " +
  "Everything works the same as when you were taking care of aliens before.</p>" +
  "<p>Note: You will only see your own score during the competition and not your opponent's score.</p>" +
  "<p>Now do your best and good luck!</p>" +
  "<p>Press 'Next' when you are ready.</p></center>"

var phase3_post = {
  type: 'instructions',
  pages: [phase3_text],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Goodbye block
var goodbye = {
  type: 'instructions',
  pages: ["<center><p>The game is now over, you did a great job!</p>" +
    "<p>Thank you for participating in the experiment!</p>" +
    "<p>Please click 'Next' and let the experimenter know you are done!</p></center>"],
  show_clickable_nav: true
}

// Get the order of the seasons
seasons_in_order_refresher2 = []
seasons_in_order_refresher3 = []
for (block = 0; block < season_names.length * n_blocks_refreshers; block ++) {  // iterate through season_order, which indicates in which block each season should be presented

  season_index2 = season_order_refresher2[block]  // 0, 1, or 2
  season_name2 = season_names[season_index2]  // "hot", "cold", or "rainy"
  season_index3 = season_order_refresher3[block]  // 0, 1, or 2
  season_name3 = season_names[season_index3]  // "hot", "cold", or "rainy"

  trials2 = [{
    type: "start_new_season",
    show_clickable_nav: true,
    pages: [
      "<img class='background' src='img/" + season_name2 + ".png'>" +
      "<p class='start_new_season'><i>This is the " + season_name2 + " season!</i></p>"
    ]
  }]

  trials3 = [{
    type: "start_new_season",
    show_clickable_nav: true,
    pages: [
      "<img class='background' src='img/" + season_name3 + ".png'>" +
      "<p class='start_new_season'><i>This is the " + season_name3 + " season!</i></p>"
    ]
  }]

  for (trial = 0; trial < n_trials_refreshers; trial ++) {
    trials2.push({
      season: season_name2,
      randomize_order: true,
      timeline: TSs[TS_rand[season_index2]]
    })
    trials3.push({
      season: season_name3,
      randomize_order: true,
      timeline: TSs[TS_rand[season_index3]]
    })
  }
  seasons_in_order_refresher2 = seasons_in_order_refresher2.concat(trials2)
  seasons_in_order_refresher3 = seasons_in_order_refresher3.concat(trials3)
}

var refresher_block_2 = {
  type: "feed-aliens",
  phase: "Refresher2",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names_rand,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order_refresher2
}

var refresher_block_3 = {
  type: "feed-aliens",
  phase: "Refresher3",
  choices: [left_key, middle_key, right_key],
  aliens: alien_names_rand,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order_refresher3
}
