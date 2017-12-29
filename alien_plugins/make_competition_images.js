
// Phase 1 & 2: Item buttons
var item_names = ["bed", "umbrella", "plant"]
item_buttons = []
for (i = 0; i < item_names.length; i ++) {
  button = "<img class='phase1_button' src='img/" + item_names[i] + ".png' id='" + item_names[i] + "-button'>"
  item_buttons.push(button)
}

// Phase 2: alien, season, and alien-season buttons
season_names = ["hot", "cold", "rainy"]
season_names_cloudy = ["hot_cloudy", "cold_cloudy", "rainy_cloudy"]
season_buttons = []
all_sa_item_names = []
for (se = 0; se < season_names.length; se ++) {
  button = "<img class='phase2_button' src='img/" + season_names[se] + ".png' id='" + season_names[se] + "-button'>"
  season_buttons.push(button);
}

alien_buttons = []
for (al = 0; al < alien_names.length; al ++) {
  button = "<img class='phase2_button' src='img/" + alien_names[al] + ".png' id='" + alien_names[al] + "-button'>"
  alien_buttons.push(button)
}

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
