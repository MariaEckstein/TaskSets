// Timing variables
var max_RT = 3000
var feedback_duration = 500
var max_RT_train = max_RT
var feedback_duration_train = 1000

// Positions on the screen
var sad_lefts = [0, 280, 520]
var sad_left = 260
var points = [0, 0, 0]

// point counters
var c_alien_tops = [20, 80, 140, 200, 260]
var point_tops = [0, 60, 120, 180, 240]

// key ids
left_key = 74;
middle_key = 75;
right_key = 76;

// Aliens
ph1_alien_names = ["alien1", "alien2", "alien4"]
ph1_alien_names = [
  ph1_alien_names[alien_ids[0]],
  ph1_alien_names[alien_ids[1]],
  ph1_alien_names[alien_ids[2]]
]
pr_alien_names = ["alien3", "alien5", "alien6"]
pr_alien_names = shuffle(pr_alien_names)

// Phase 1: Item buttons
item_buttons = []
for (i = 0; i < 3; i ++) {
  button = "<img class='phase1_button' src='img/" + button_names[i] + ".png' id='" + button_names[i] + "-button'>"
  item_buttons.push(button)
}

// Phase 2: alien-season-item buttons
season_buttons = []
all_sa_button_names = []
for (se = 0; se < season_names.length; se ++) {
  button = "<img class='phase2_button' src='img/" + season_names[se] + ".png' id='" + season_names[se] + "-button'>"
  season_buttons.push(button);
}

alien_buttons = []
for (al = 0; al < ph1_alien_names.length; al ++) {
  button = "<img class='phase2_button' src='img/" + ph1_alien_names[al] + ".png' id='" + ph1_alien_names[al] + "-button'>"
  alien_buttons.push(button)
}

item_buttons = []
for (it = 0; it < button_names.length; it ++) {
  button = "<img class='phase2_button' src='img/" + button_names[it] + ".png' id='" + button_names[it] + "-button'>"
  item_buttons.push(button)
}

alien_season_buttons = []
for (se = 0; se < season_names.length; se ++) {
  for (al = 0; al < ph1_alien_names.length; al ++) {
    button =
      "<center><div class='alien_box' id='" + ph1_alien_names[al] + season_names[se] + "-button'>" +
        "<img class='phase2_button' src='img/" + ph1_alien_names[al] + ".png' style='position:absolute; left: 25%'>" +
        "<img class='phase2_button' src='img/" + season_names[se] + ".png'>" +
      "</div></center>"
    alien_season_buttons.push(button)
  }
}
