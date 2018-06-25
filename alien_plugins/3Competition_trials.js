// Get the trial objects for season, alien_same_season, alien, ....
season = {
  assess: "season",
  timeline: create_pick_aliens_timeline(names=season_names,
                                        buttons=season_buttons),
  randomize_order: true,
}

alien_same_season = {
  assess: "alien-same-season",
  timeline: create_pick_aliens_timeline(names=alien_season_names,
                                        buttons=alien_season_buttons,
                                        alien_season="same"),
  randomize_order: true,
}

alien = {
  assess: "alien",
  timeline: create_pick_aliens_timeline(names=alien_names,
                                        buttons=alien_buttons),
  randomize_order: true,
}

item = {
  assess: "item",
  timeline: create_pick_aliens_timeline(names=item_names,
                                        buttons=item_buttons),
  randomize_order: true,
}

// alien_rest_season = {
//   assess: "alien-different-season",
//   timeline: create_pick_aliens_timeline(names=alien_season_names,
//                                         buttons=alien_season_buttons,
//                                         alien_season="different"),
//   randomize_order: true,
// }

// Put all of them together
phase3_pick_aliens = {
  type: "pick-aliens",
  phase: "3PickAliens",
  choices: [left_key, right_key],
  timing_feedback_duration: feedback_duration,
  timing_response: max_RT_competition,
  timeout_message: timeout_message_comp,
  timing_post_trial: ITI,
  timeline: [].concat(
    intro_season, season, season, season, season,  // comes first because that's what I'm interested in - shouldn't be influenced by the other things
    intro_alien_same_seasonn, alien_same_season, alien_same_season,
    intro_alien, alien, alien, alien, alien,
    intro_item, item, item, item, item,
    intro_season, season, season, season, season,
  )
}
