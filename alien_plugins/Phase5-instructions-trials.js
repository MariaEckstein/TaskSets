
// Instruction slides
instructions1 =
  "<center><p>Thank you for taking care of all these aliens and their visitors! You did a fantastic job!</p>" +
  "[happy aliens?]"

instructions2 =
  "<center><p>The annual competition has now long passed, " +
  "and most visitors have left to go back to their home planets. " +
  "Your bags are packed as well. " +
  "You are about to step on board of the space ship that will take you home.<p>" +
  "<p>But suddenly, you see your alien friend running toward you, waving its arms. " +
  "It excitedly tells you that a very special event is about to happen, " +
  "which has not happened in many decades: the beautiful <i>rainbow season</i>!<p>" +
  "[pic of rainbow]" +
  "<p>Excited by the prospect of seeing this legendary event in person, " +
  "you decide to miss your space ship and spend just a few more days here!</p></center>"

instructions3 =
  "<center><p>You will now play the rainbow season. " +
  "Continue helping the aliens grow, selecting the right items for each one. " +
  "All the guests and spectators have left, so you will only need to take care of your three original aliens.<p>" +
  "<p>In the rainbow season, it is impossible to see how much aliens grow. " +
  "Still do your best to help each alien grow as much as you can!<p>" +
  "<p>Press Next when you are ready to start!</p>"

var phase5_instructions = {
  type: 'instructions',
  pages: [
      instructions1,
      instructions2,
      instructions3,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Get the seasons in the pre-randomized order
rainbow_timeline = [
  {sad_alien: 0},
  {sad_alien: 1},
  {sad_alien: 2},
]
var rainbow_season_phase5 = {
  type: "phase1",
  phase: 5,
  season: "rainbow",
  aliens: ph1_alien_names,
  choices: [left_key, middle_key, right_key],
  randomize_order: true,
  show_stim_with_feedback: false,
  timing_response: max_RT,
  timing_feedback_duration: feedback_duration,
  timeout_message: "<p style='text-align:center; font-size:40px; z=10'>" +
                   "Please respond faster next time! </p>",
  timeline: rainbow_timeline
}
