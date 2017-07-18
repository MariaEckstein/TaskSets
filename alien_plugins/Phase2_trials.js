
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

// new_block = {
//   type: "instructions",
//   pages: [next_block]
// }

phase2_trials = {
  type: "phase2",
  timing_response: 10000,
  timeline: [].concat(
    alien_same_season,
    season,
    alien,
    alien_rest_season
  )
}
