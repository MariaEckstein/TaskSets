
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
alien_season_buttons = []
for (se = 0; se < season_names.length; se ++) {
  for (al = 0; al < alien_names.length; al ++) {
    button =
      "<center><div class='alien_box' id='" + alien_names[al] + season_names[se] + "-button'>" +
        "<img class='phase2_button' src='img/" + alien_names[al] + ".png' style='position:absolute; left: 25%'>" +
        "<img class='phase2_button' src='img/" + season_names[se] + ".png'>" +
      "</div></center>"
    alien_season_buttons.push(button)
  }
}

// TS order
TS_order = create_pseudo_random_array([0,1,2], 3 * n_blocks_phase1);
TS_order_cloudy = create_pseudo_random_array([0,1,2], 3 * n_blocks_cloudy);
TS_order_refresher2 = create_pseudo_random_array([0,1,2], 3 * n_blocks_refreshers);
TS_order_refresher3 = create_pseudo_random_array([0,1,2], 3 * n_blocks_refreshers);
TS_order_phase4 = create_pseudo_random_array([0,1,2], 3 * n_blocks_rainbow);
