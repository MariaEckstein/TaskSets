
intro_alien_same_season =
  "<center><p>In the following game, you will be taking care of three aliens. " +
  "The aliens live on a strange planet and your goal is to help them grow as fast as possible.</p>" +
  "<p>Each alien needs different things to thrive. " +
  "One alien might need to chew on a shiny rock in order grow, " +
  "whereas another might need to catch cosmic rays with its red umbrella.</p>" +
  "<p>Over time, you will learn what each alien needs in order to grow.</p></center>" +
  aliens +
  move_on



season = {
  assess: "season",
  randomize_order: true,
  timing_feedback_duration: 1,
  timeline: [
    {buttons: [season_buttons[0], season_buttons[1]]},
    {buttons: [season_buttons[0], season_buttons[2]]},
    {buttons: [season_buttons[1], season_buttons[2]]},
  ]
}

alien = {
  assess: "alien",
  randomize_order: true,
  timing_feedback_duration: 1,
  timeline: [
    {buttons: [alien_buttons[0], alien_buttons[1]]},
    {buttons: [alien_buttons[0], alien_buttons[2]]},
    {buttons: [alien_buttons[1], alien_buttons[2]]},
  ]
}

same_season_timeline = []
rest_timeline = []
for (a1 = 0; a1 < alien_season_buttons.length; a1 ++) {
  for (a2 = 0; a2 < alien_season_buttons.length; a2 ++) {
    if (a1 < a2) {  // we don't compare identical stimuli
      trial_buttons = [alien_season_buttons[a1], alien_season_buttons[a2]]
      if (Math.floor(a1 / phase1_aliens.length) == (Math.floor(a2 / phase1_aliens.length))) {  // stimuli come from the same season
        same_season_timeline.push({buttons: trial_buttons})
      } else {
        rest_timeline.push({buttons: trial_buttons})
      }
    }
  }
}

alien_same_season = {
  assess: "alien-season",
  timing_feedback_duration: 1,
  randomize_order: true,
  timeline: same_season_timeline
}

alien_rest_season = {
  assess: "alien-season",
  timing_feedback_duration: 1,
  randomize_order: true,
  timeline: rest_timeline
}

phase2_trials = {
  type: "phase2",
  timing_response: 10000,
  timeline: [].concat(
    intro_alien_same_seasonn,
    alien_same_season,
    intro_season,
    season,
    intro_alien,
    alien,
    intro_alien_rest_season,
    alien_rest_season
  )
}
