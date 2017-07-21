// Timing variables
var max_RT = 3000
var feedback_duration = 750
var max_RT_train = max_RT
var feedback_duration_train = 1000

// Positions on the screen
var alien_height = 240
var alien_height_point_counter = 60
var sad_lefts = [0, 280, 520]
var sad_left = 260
var reward_top = - 27
var reward_left = sad_left + 15
var button_height = 50
var big_button_height = alien_height
var points = [0, 0, 0]
if (input_device == "mouse") {
  border_witdth = 0;
} else if (input_device == "keyboard") {
  border_witdth = 20;
}

// Aliens
alien1 = "<img src='img/alien1.png' "
alien2 = "<img src='img/alien2.png' "
alien3 = "<img src='img/alien3.png' "
alien4 = "<img src='img/alien4.png' "
alien5 = "<img src='img/alien5.png' "
alien6 = "<img src='img/alien6.png' "
alien7 = "<img src='img/alien7.png' "
alien8 = "<img src='img/alien8.png' "
practice_aliens = [alien3, alien5, alien6]
practice_aliens = shuffle(practice_aliens)
phase1_aliens_ord = [alien1, alien2, alien4]
phase1_aliens = [
  phase1_aliens_ord[alien_ids[0]],
  phase1_aliens_ord[alien_ids[1]],
  phase1_aliens_ord[alien_ids[2]]
]

// Phase 1: Item buttons
item_buttons = []
for (i = 0; i < 3; i ++) {
  button = "<img src='img/" + button_names[i] + ".png' style='border: " +
    border_witdth + "px solid transparent;' height=" + button_height + ">"
  if (input_device == "mouse") {
    button =
      "<button id='" + button_names[i] + "-button' class='jspsych-btn'>" +
        button +
      "</button>"
  }
  item_buttons.push(button)
}

// Phase 2: alien-season buttons
season_buttons = []
all_sa_button_names = []

for (se = 0; se < seasons.length; se ++) {
  button = "<img class='phase2_button' src='img/" + seasons[se] + ".png' id='" + seasons[se] + "-button'>"
  if (input_device == "mouse") {
    button_name = seasons[se] + "-button";
    all_sa_button_names.push("#".concat(button_name));
    button =
      "<button id='" + button_name + "' class='jspsych-btn'>" +
        button +
      "</button>"
  }
  season_buttons.push(button);
}

alien_buttons = []
for (al = 0; al < phase1_aliens.length; al ++) {
  button = phase1_aliens[al] + "class='phase2_button'>"
  if (input_device == "mouse") {
    button_name = "alien" + phase1_aliens[al].substring(19, 20) + "-button";
    all_sa_button_names.push("#".concat(button_name));
    button =
      "<button id='" + button_name + "' class='jspsych-btn'>" +
        button +
      "</button>"
  }
  alien_buttons.push(button)
}

alien_season_buttons = []
for (se = 0; se < seasons.length; se ++) {
  for (al = 0; al < phase1_aliens.length; al ++) {
    button =
      "<center><div style='position:relative; border: " + border_witdth + "px solid transparent;'>" +
        phase1_aliens[al] + "class='phase2_button' style='position:absolute; left: 25%'>" +
        "<img class='phase2_button' src='img/" + seasons[se] + ".png'>" +
      "</div></center>"
    if (input_device == "mouse") {
      button_name = "alien" + phase1_aliens[al].substring(19, 20) + seasons[se] + "-button";
      all_sa_button_names.push("#".concat(button_name));
      button =
        "<button id='" + button_name + "' class='jspsych-btn'>" +
          button +
        "</button>"
    }
    alien_season_buttons.push(button)
  }
}

// Rest
var speech = "<img src='img/speech.png' style='position:absolute; left:" + sad_left + "px;' height=120>"
var exclamation_points = "<p style='color:red; position:absolute; left:" + reward_left + "px; top:" + reward_top + "px; font-size:46px;'> !!!!"
var reward = "<p style='color:green; position:absolute; left:" + reward_left + "px; top:" + reward_top + "px; font-size:46px;'> +5"

// Put things together
shuffled_buttons = shuffle(item_buttons)
response_buttons =
  "<center><div class='response_buttons' style='position:relative; border: 100px solid transparent; z=10;'>" +
    shuffled_buttons[0] +
    shuffled_buttons[1] +
    shuffled_buttons[2] +
  "</div></center>"

var aliens =
  "<center><div style='position:relative; z=10; border: 10px solid transparent;'>" +
    practice_aliens[0] + "height=" + alien_height + ">" +
    practice_aliens[1] + "height=" + alien_height + ">" +
    practice_aliens[2] + "height=" + alien_height + ">" +
  "</div></center>"

var sad_alien =
  "<center><div style='position:relative'>" +
    alien6 + "height=" + alien_height + ">" +
    // speech + exclamation_points +
  "</div></center>"

var happy_alien =
  "<center><div style='position:relative;'>" +
    alien6 + "height=" + alien_height + ">" +
    speech + reward +
  "</div></center>"

var happy_aliens =
  "<center><div style='position:relative;'>" +
    practice_aliens[0] + "height=" + alien_height + ">" +
    practice_aliens[1] + "height=" + alien_height + ">" +
    practice_aliens[2] + "height=" + alien_height + ">" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[0] + "px;' height=120>" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[1] + "px;' height=120>" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[2] + "px;' height=120>" +
  "</div></center>"

var move_on = "<center><p><i>Click next or press the right-arrow key to move on.</i></p></center>"

var welcome_block = "<center><p>Welcome to the experiment!</p></center>" + move_on
