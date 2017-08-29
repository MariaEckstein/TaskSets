
// Instruction slides
instructions0 =
  "<center><p>Congratulations! <i>You won</i> the competition!</p>" +
  "[cheering?]" +
  "<p>The aliens reward you with all kinds of beautiful prizes. " +
  "You feel honored.</p>"

instructions1 =
  "<center><p>You are happy about your time on this planet, and sad that you will soon have to leave. " +
  "Your bags are packed and you are about to step on board of the space ship that will take you home.<p>" +
  "<p>But suddenly, you see your alien friend running toward you, waving its arms. " +
  "It excitedly tells you that a very special event is about to happen, " +
  "which has not happened in many decades: the beautiful <i>rainbow season</i>!<p>" +
  "<img class='alien' src='img/rainbow.png'>" +
  "<p>Excited by the prospect of seeing this legendary event in person, " +
  "you decide to miss your space ship and spend just a few more days with the aliens!</p></center>"

instructions2 =
  "<center><p>You will now play the rainbow season. " +
  "Continue helping the aliens grow, selecting the right items for each one. " +
  // "All the guests and spectators have left, so you will only need to take care of your original aliens.<p>" +
  "<p>In the rainbow season, it is impossible to see how much aliens grow, " +
  "so <i>you will not see the effects of your actions. " +
  "Still do your best to help each alien grow as much as you can!</i><p>" +
  "<p>Press 'Next' when you are ready to start!</p>"

after_phase5 =
  "<center><p>Thank you for taking care of all the aliens! You did a fantastic job!</p>" +
  "[happy aliens?]" +
  "<p>The game is now over! " +
  "Please take a few minutes to fill out the questionnaire on the following screen.</p>"

var phase5_instructions = {
  type: 'instructions',
  pages: [
      instructions0,
      instructions1,
      instructions2,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

var phase5_after = {
  type: 'instructions',
  pages: [
      after_phase5,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Get the seasons in the pre-randomized order
rainbow_timeline = [
  {sad_alien: 0},
  {sad_alien: 1},
  {sad_alien: 2},
  {sad_alien: 3},
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
  timeout_message: timeout_message,
  timeline: rainbow_timeline,
}
