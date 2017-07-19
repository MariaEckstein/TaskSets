// Timelines for season, alien, same-season-alien, and rest-season-alien
season_timeline = [
  {buttons: [season_buttons[0], season_buttons[1]]},
  {buttons: [season_buttons[0], season_buttons[2]]},
  {buttons: [season_buttons[1], season_buttons[2]]},
]
alien_timeline = [
  {buttons: [alien_buttons[0], alien_buttons[1]]},
  {buttons: [alien_buttons[0], alien_buttons[2]]},
  {buttons: [alien_buttons[1], alien_buttons[2]]},
]
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

// Create shorter version for debug subject 0
if (subjID == 0) {
  same_season_timeline = [
    same_season_timeline[0],
    same_season_timeline[2],
    same_season_timeline[4],
    same_season_timeline[6],
  ]
  rest_timeline = [
    rest_timeline[0],
    rest_timeline[2],
    rest_timeline[4],
    rest_timeline[6]
  ]
}

// Define stuff for jsPsych trial objects
alien_same_season = {
  assess: "alien-season",
  timing_feedback_duration: 1,
  randomize_order: true,
  timeline: same_season_timeline
}
season = {
  assess: "season",
  randomize_order: true,
  timing_feedback_duration: 1,
  timeline: season_timeline
}
alien = {
  assess: "alien",
  randomize_order: true,
  timing_feedback_duration: 1,
  timeline: alien_timeline
}
alien_rest_season = {
  assess: "alien-season",
  timing_feedback_duration: 1,
  randomize_order: true,
  timeline: rest_timeline
}

// Put everything together in the final phase2 trial object
phase2_trials = {
  type: "phase2",
  timing_response: 10000,
  timeline: [].concat(
    // intro_alien_same_seasonn,  // now part of instructions
    alien_same_season,
    intro_season,
    season,
    intro_alien,
    alien,
    intro_alien_rest_season,
    alien_rest_season
  )
}
