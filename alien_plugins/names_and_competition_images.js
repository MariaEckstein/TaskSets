
// Seasons
season_names = shuffle(["hot", "cold", "rainy"])
season_names_cloudy = [season_names[0].concat("_cloudy"),
                       season_names[1].concat("_cloudy"),
                       season_names[2].concat("_cloudy")]
season_buttons = []
for (se = 0; se < season_names.length; se ++) {
  button = "<img class='phase2_button' src='img/" + season_names[se] + ".png' id='" + season_names[se] + "-button'>"
  season_buttons.push(button);
}

// Items
item_names = shuffle(["bed", "umbrella", "plant"])
item_buttons = []
for (i = 0; i < item_names.length; i ++) {
  button = "<img class='phase1_button' src='img/" + item_names[i] + ".png' id='" + item_names[i] + "-button'>"
  item_buttons.push(button)
}

// Aliens
alien_names = shuffle(["alien1", "alien2", "alien3", "alien4"])
pr_alien_names = shuffle(["alien5", "alien6", "alien7", "alien9"])
alien_buttons = []
for (al = 0; al < alien_names.length; al ++) {
  button = "<img class='phase2_button' src='img/" + alien_names[al] + ".png' id='" + alien_names[al] + "-button'>"
  alien_buttons.push(button)
}

// Season-aliens
alien_season_names = []
alien_season_buttons = []
for (se = 0; se < season_names.length; se ++) {
  for (al = 0; al < alien_names.length; al ++) {
    button_name = alien_names[al] + season_names[se]
    button =
      "<center><div class='alien_box' id='" + button_name + "-button'>" +
        "<img class='phase2_button' src='img/" + alien_names[al] + ".png' style='position:absolute; left: 25%'>" +
        "<img class='phase2_button' src='img/" + season_names[se] + ".png'>" +
      "</div></center>"
    alien_season_names.push(button_name)
    alien_season_buttons.push(button)
  }
}

// TS names
TS_names = [0, 1, 2]

// TS order
// TS_order = create_pseudo_random_array([0,1,2], n_blocks_phase1);
// TS_order_mixed = jsPsych.randomization.repeat([0,1,2], n_blocks_phase1)   //true randomize mixed blocks
// //TS_order_mixed = jsPsych.randomization.repeat([0,1,2,3,4,5,6,7,8,9,10,11], 1)   //true randomize mixed blocks
// TS_order_cloudy = create_pseudo_random_array([0,1,2], 3 * n_blocks_cloudy);
// TS_order_refresher2 = jsPsych.randomization.repeat([0,1,2], n_blocks_refreshers);   //changed from 3*blocks
// TS_order_refresher3 = jsPsych.randomization.repeat([0,1,2], n_blocks_refreshers);   //changed from 3*blocks
// TS_order_phase4 = create_pseudo_random_array([0,1,2], 3 * n_blocks_rainbow);
alien_order = jsPsych.randomization.repeat([0,1,2,3], 1)


//var factors = {
  //  TS: [TS0, TS1, TS2],
//    aliens: [0, 1, 2, 3]
//}

//var full_design = jsPsych.randomization.factorial(factors, 3);    //return every combo of TS and alien, 3 times each
