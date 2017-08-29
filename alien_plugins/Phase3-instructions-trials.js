
// Instruction slides
phase3_text =
  "<center><p>Great job making all these choices! You are now ready to enter the competition.</p>" +
  "[pic of arena]" +
  "<p><i>Let each of your aliens grow as much as possible to win the competition!</i> " +
  "Everything works the same as when you were taking care of aliens before.</p>" +
  "<p>Note: You will only see your own score during the competition and not your opponent's score.</p>" +
  "<p>Now do your best and good luck!</p>" +
  "<p>Press 'Next' when you are ready.</p></center>"

var phase3_instructions = {
  type: 'instructions',
  pages: [phase3_text],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Define trials
seasons_in_order = [].concat(
  second_rep_chunks[season_order_phase2b[1][0]], second_rep_chunks[season_order_phase2b[1][1]], second_rep_chunks[season_order_phase2b[1][2]],
  third_rep_chunks[season_order_phase2b[2][0]], third_rep_chunks[season_order_phase2b[2][1]], third_rep_chunks[season_order_phase3[2][2]]
)

var refresher_block_2b = {
  type: "phase1",
  phase: '2b',
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order
}

seasons_in_order = [].concat(
  second_rep_chunks[season_order_phase3[1][0]], second_rep_chunks[season_order_phase3[1][1]], second_rep_chunks[season_order_phase3[1][2]],
  third_rep_chunks[season_order_phase3[2][0]], third_rep_chunks[season_order_phase3[2][1]], third_rep_chunks[season_order_phase3[2][2]]
)

var refresher_block_3 = {
  type: "phase1",
  phase: 3,
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: timeout_message,
  timeline: seasons_in_order
}
