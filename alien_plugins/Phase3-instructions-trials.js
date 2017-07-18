
// Instruction slides
instructions1 =
  "<center><p>Great job making all these choices! You are now ready to enter the competition.</p>" +
  "[pic of arena]" +
  "<p>Make sure you let each of your aliens grow as much as possible! " +
  "Use the knowledge you have gained so far to win this competition. " +
  "Everything works the same as when you were taking care of aliens before.</p>" +
  "<p>Note: You will only see your own score during the competition. " +
  "Your opponent's score will not be revealed until the end.</p>" +
  "<p>Now do your best and good luck!</p>" +
  "<p>Press 'Next' when you are ready.</p></center>"

var phase3_instructions = {
  type: 'instructions',
  pages: [
      instructions1,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Get the seasons in the pre-randomized order
seasons_in_order = [].concat(
  // first_rep_chunks[season_order_phase3[0][0]], first_rep_chunks[season_order_phase3[0][1]], first_rep_chunks[season_order_phase3[0][2]],
  second_rep_chunks[season_order_phase3[1][0]], second_rep_chunks[season_order_phase3[1][1]], second_rep_chunks[season_order_phase3[1][2]],
  third_rep_chunks[season_order_phase3[2][0]], third_rep_chunks[season_order_phase3[2][1]], third_rep_chunks[season_order_phase3[2][2]]
)

// Define a jsPsych object for all the trials; pick aliens; max RT; timing
var all_seasons_phase3 = {
  type: "phase1",
  aliens: phase1_aliens,
  timing_response: 10000,
  timing_feedback_duration: 750,
  timeout_message: "<p style='text-align:center; font-size:40px; z=10'>" +
                   "Please respond faster next time! </p>",
  timeline: seasons_in_order
}
