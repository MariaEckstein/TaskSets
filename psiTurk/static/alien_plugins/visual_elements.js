// Timing variables
// Main experiment
var max_RT = 1500
var feedback_duration = 500
var ITI_duration = 250
// Training block
max_RT_phase2 = max_RT
var max_RT_train = 2 * max_RT
var feedback_duration_train = 1.5 * feedback_duration
var ITI_duration_train = 1.5 * ITI_duration

// Positions on the screen
var sad_lefts = [0, 280, 520]
var sad_left = 260
var points = [0, 0, 0, 0]

// point counters
var c_alien_tops = [20, 80, 140, 200, 260]
var point_tops = [0, 60, 120, 180, 240]

// key ids
left_key = 74;
middle_key = 75;
right_key = 76;

var timeout_message = "<p class='start_new_season'>Too slow!<br><br><i>Respond using the keys j, k, and l.</i></p>"

// Aliens
ph1_alien_names = ["alien1", "alien2", "alien3", "alien4"]
ph1_alien_names = [
  ph1_alien_names[alien_ids[0]],
  ph1_alien_names[alien_ids[1]],
  ph1_alien_names[alien_ids[2]],
  ph1_alien_names[alien_ids[3]]
]
pr_alien_names = ["alien5", "alien6", "alien7", "alien9"]
pr_alien_names = shuffle(pr_alien_names)

// Phase 1: Item buttons
item_buttons = []
for (i = 0; i < 3; i ++) {
  button = "<img class='phase1_button' src='/static/img/" + button_names[i] + ".png' id='" + button_names[i] + "-button'>"
  item_buttons.push(button)
}

// Phase 2: alien-season-item buttons
season_buttons = []
all_sa_button_names = []
for (se = 0; se < season_names.length; se ++) {
  button = "<img class='phase2_button' src='/static/img/" + season_names[se] + ".png' id='" + season_names[se] + "-button'>"
  season_buttons.push(button);
}

alien_buttons = []
for (al = 0; al < ph1_alien_names.length; al ++) {
  button = "<img class='phase2_button' src='/static/img/" + ph1_alien_names[al] + ".png' id='" + ph1_alien_names[al] + "-button'>"
  alien_buttons.push(button)
}

alien_season_buttons = []
for (se = 0; se < season_names.length; se ++) {
  for (al = 0; al < ph1_alien_names.length; al ++) {
    button =
      "<center><div class='alien_box' id='" + ph1_alien_names[al] + season_names[se] + "-button'>" +
        "<img class='phase2_button' src='/static/img/" + ph1_alien_names[al] + ".png' style='position:absolute; left: 25%'>" +
        "<img class='phase2_button' src='/static/img/" + season_names[se] + ".png'>" +
      "</div></center>"
    alien_season_buttons.push(button)
  }
}
