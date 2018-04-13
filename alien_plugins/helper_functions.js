
// Draw random number from a Gaussian distribution
function randn_bm() {
    var u = 1 - Math.random();  // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

// Shuffle array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// // Randomize season order
// function create_pseudo_random_array(available_elements, target_length) {
//   array = shuffle(available_elements)
//   while (array.length < target_length) {
//     new_section = shuffle(available_elements)
//     if (new_section[0] != array[array.length-1]) {  // make sure the first element of the new section and the last element of the old section are not the saame
//       array = array.concat(new_section)
//     }
//   }
//   return array
// }

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

  // Create timeline for Initial Learn: n_blocks_phase1 non-mixed blocks
  random_number = Math.floor(Math.random() * TS_orders.length)
  n_sections = n_blocks * TS_names.length
  TS_order = TS_orders[random_number].slice(0, n_sections)

  // Concate all the TS sections for the block (one section per TS in TS_order)
  all_sections = []
  for (section_i = 0; section_i < TS_order.length; section_i ++) {
      section = create_feed_aliens_section(section_i, TS_order, n_trials_per_alien, block_type)
      all_sections = all_sections.concat(section)
  }
  return all_sections
}

function create_feed_aliens_section(section_i, TS_order, n_trials_per_alien, block_type) {

    // Figure out which TS and season will be shown in this section
    TS_name = TS_order[section_i]  // 0, 1, or 2
    TS = TSs[TS_name]  // as defined in define_TS.js
    season_name = season_names[TS_name]  // season_names = shuffle(["hot", "cold", "rainy"])
    if (block_type == "cloudy") {
        season_name = season_name.concat("_cloudy")
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
        section = [start_new_season];
    } else {  // if (block_type == "mixed")
        section = [];
    }

    // Add n_trials_per_alien trials per alien to `section`
    for (tr = 0; tr < n_trials_per_alien; tr ++) {
        four_trials = []
        for (alien = 0; alien < TS.length; alien ++) {  // TS.length = number of aliens = 4
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
        section = section.concat(jsPsych.randomization.shuffle(four_trials))  // shuffle trial order and add to `section`
    }
    return section
}
