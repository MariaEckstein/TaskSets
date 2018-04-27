
// Draw random number from a Gaussian distribution
function randn_bm() {
    var u = 1 - Math.random();  // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

// Create timelines for pick-aliens phase
function create_pick_aliens_timeline(names, buttons, alien_season) {

  // Loop through buttons and select two for each trial to present
  timeline = []
  for (x1 = 0; x1 < buttons.length; x1 ++) {  // button1 can be any
    for (x2 = 0; x2 < buttons.length; x2 ++) {  // button2 can be any
      if (x1 < x2) {  // but they cannot be the same, and each pair is only allowed once

        // Check if this pair will be added
        add_this_pair = false
        if (alien_season == undefined) {  // default: all pairs are added
          add_this_pair = true
        } else {  // it depends for alien-same-season and alien-different-season
          if (Math.floor(x1 / alien_names.length) == (Math.floor(x2 / alien_names.length))) {  // both buttons are in the same season
            if (alien_season == "same") {
              add_this_pair = true
            }
          } else {  // both buttons are in different seasons
            if (alien_season == "different") {
              add_this_pair = true
            }
          }
        }

        // Add the selected pair to the timeline
        if (add_this_pair) {
          timeline.push(  // presentation order is not shuffled here because it will be shuffled inside pick-aliens
            {buttons: [buttons[x1], buttons[x2]],
            button_names: [names[x1], names[x2]]})
        }
      }
    }
  }
  return timeline
}

function create_feed_aliens_timeline(n_blocks, n_trials_per_alien, block_type='normal') {

  if (block_type != 'mixed') {
    // Create timeline for Initial Learn: n_blocks_phase1 non-mixed blocks
    n_sections = n_blocks * TS_names.length
    random_number = Math.floor(Math.random() * TS_orders.length)
    TS_order = TS_orders[random_number].slice(0, n_sections)

    // Concate all the TS sections for the block (one section per TS in TS_order)
    all_sections = []
    for (section_i = 0; section_i < n_sections; section_i ++) {
      section = create_feed_aliens_section(section_i, TS_order, n_trials_per_alien, block_type)
      all_sections = all_sections.concat(section)
    }

  } else {  // if (block_type == 'mixed')
    // Create a block that consists of multiple sections of 12 trials; order is randomized within each section
    all_sections = []
    for (i = 0; i < n_trials_per_alien; i ++) {
      section = []
      for (section_i = 0; section_i < season_names.length; section_i ++) {  // loop over seasons to get each item once in each season
        section = section.concat(
          create_feed_aliens_section(section_i, [0, 1, 2], 1, block_type))  // create 1 trial per alien per season -> 12 trials total
      }
      section = jsPsych.randomization.shuffle(section)
      all_sections = all_sections.concat(section)
    }

    // Add new-season screen at the very beginning
    start_new_season = {
        type: "start_new_season",
        show_clickable_nav: true,
        pages: [
          "<p class='start_new_season'><i>A new chaotic season has begun!</i></p>"
        ]
      }
    all_sections.unshift(start_new_season)
  }
  return all_sections
}

function create_feed_aliens_section(section_i, TS_order, n_trials_per_alien, block_type) {

    // Get TS and season for this section
    TS_name = TS_order[section_i]  // 0, 1, or 2
    TS = TSs[TS_name]  // as defined in define_TS.js
    season_name = season_names[TS_name]  // season_names = shuffle(["hot", "cold", "rainy"])
    if (block_type == "cloudy") {
        season_name = season_name.concat("_cloudy")
    }

    // Add n_trials_per_alien trials per alien to `section`
    section = []
    section_target_length = n_trials_per_alien * alien_names.length
    last_alien_old_chunk = "none"
    //// Create a block of 4 aliens
    while (section.length < section_target_length) {  // add trials until I have the right number
      four_trials = []
      for (alien = 0; alien < alien_names.length; alien ++) {
          alien_trial = TS[alien]
          trial = {
              season: season_name,
              sad_alien: alien_trial["sad_alien"],
              key_answer: alien_trial["key_answer"],
              reward: alien_trial["reward"],
              TS: alien_trial["TS"],
              block_type: block_type,
          }
          four_trials.push(trial);
      }
      //// Add the 4-alien block to section (if this does not create an alien repetition)
      four_trials = jsPsych.randomization.shuffle(four_trials);  // randomize order within each chunk of 4 trials
      first_alien_new_chunk = four_trials[0].sad_alien
      if (first_alien_new_chunk != last_alien_old_chunk) {  // make sure that the same alien does not come up twice in a row (has no effect on mixed blocks because they'll be randomized independently after)
        section = section.concat(four_trials)
        last_alien_old_chunk = four_trials[four_trials.length-1].sad_alien
      }
    }

    // Create start_new_season (non-mixed blocks) and put at the beginning of `section`
    if (block_type != "mixed") {
        start_new_season = {
            type: "start_new_season",
            show_clickable_nav: true,
            pages: [
              "<img class='background' src='img/" + season_name + ".png'>" +
              "<p class='start_new_season'><i>The season has changed!</i></p>"
            ]
        }
        section.unshift(start_new_season)
    }

    return section
}
