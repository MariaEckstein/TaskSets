
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

// Define trials
seasons_in_order_refresher2 = [].concat(
  seven_trial_chunk[season_order_refresher2[0][0]], seven_trial_chunk[season_order_refresher2[0][1]], seven_trial_chunk[season_order_refresher2[0][2]],
  seven_trial_chunk[season_order_refresher2[1][0]], seven_trial_chunk[season_order_refresher2[1][1]], seven_trial_chunk[season_order_refresher2[1][2]]
)

var refresher_block_2 = {
  type: "feed-aliens",
  phase: "Refresher2",
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order_refresher2
}

seasons_in_order_refresher3 = [].concat(
  seven_trial_chunk[season_order_refresher3[0][0]], seven_trial_chunk[season_order_refresher3[0][1]], seven_trial_chunk[season_order_refresher3[0][2]],
  seven_trial_chunk[season_order_refresher3[1][0]], seven_trial_chunk[season_order_refresher3[1][1]], seven_trial_chunk[season_order_refresher3[1][2]]
)

var refresher_block_3 = {
  type: "feed-aliens",
  phase: "Refresher3",
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order_refresher3
}

// Goodbye block
var goodbye = {
  type: 'instructions',
  pages: ["<center><p>The game is now over, you did a great job!</p>" +
    "<p>Thank you for participating in the experiment!</p>" +
    "<p>Please click 'Next' and let the experimenter know you are done!</p></center>"],
  show_clickable_nav: true
}
