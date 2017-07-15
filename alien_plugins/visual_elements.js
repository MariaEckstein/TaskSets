// Positions on the screen
var alien_height = 240
var alien_height_point_counter = 60
var sad_lefts = [0, 280, 520]
var sad_left = 260
var reward_top = - 27
var reward_left = sad_left + 15
var button_height = 50
var points = [0, 0, 0]

// Buttons
bed_button =
  "<button id='bed-button'" +
    "class='jspsych-btn'>" +
    "<img src='img/bed.png' height=" + button_height + ">" +
  "</button>"
umbrella_button =
  "<button id='umbrella-button'" +
    "class='jspsych-btn'>" +
    "<img src='img/umbrella.png' height=" + button_height + ">" +
  "</button>"
plant_button =
  "<button id='plant-button'" +
    "class='jspsych-btn'>" +
    "<img src='img/plant.png' height=" + button_height + ">" +
  "</button>"
var buttons = [bed_button, umbrella_button, plant_button]

// Aliens & Co.
dblue_alien = "<img src='img/alien1.png' "
lgreen_alien = "<img src='img/alien2.png' "
dred_alien = "<img src='img/alien3.png' "
purple_alien = "<img src='img/alien4.png' "
lblue_alien = "<img src='img/alien5.png' "
dgreen_alien = "<img src='img/alien6.png' "
alien_array = [dred_alien, lblue_alien, dgreen_alien]

var speech = "<img src='img/speech.png' style='position:absolute; left:" + sad_left + "px;' height=120>"
var exclamation_points = "<p style='color:red; position:absolute; left:" + reward_left + "px; top:" + reward_top + "px; font-size:46px;'> !!!!"
var reward = "<p style='color:green; position:absolute; left:" + reward_left + "px; top:" + reward_top + "px; font-size:46px;'> +5"

// Put things together

shuffled_buttons = shuffle(buttons)
response_buttons =
  "<center><div class='response_buttons' style='position:relative; border: 100px solid transparent; z=10;'>" +
    shuffled_buttons[0] +
    shuffled_buttons[1] +
    shuffled_buttons[2] +
  "</div></center>"

shuffled_aliens = shuffle(alien_array)
var aliens =
  "<center><div style='position:relative; z=10;'>" +
    shuffled_aliens[0] + "height=" + alien_height + ">" +
    shuffled_aliens[1] + "height=" + alien_height + ">" +
    shuffled_aliens[2] + "height=" + alien_height + ">" +
  "</div></center>"

var sad_alien =
  "<center><div style='position:relative'>" +
    dgreen_alien + "height=" + alien_height + ">" +
    speech + exclamation_points +
  "</div></center>"

var happy_alien =
  "<center><div style='position:relative;'>" +
    dgreen_alien + "height=" + alien_height + ">" +
    speech + reward +
  "</div></center>"

var happy_aliens =
  "<center><div style='position:relative;'>" +
    shuffled_aliens[0] + "height=" + alien_height + ">" +
    shuffled_aliens[1] + "height=" + alien_height + ">" +
    shuffled_aliens[2] + "height=" + alien_height + ">" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[0] + "px;' height=120>" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[1] + "px;' height=120>" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[2] + "px;' height=120>" +
  "</div></center>"

var move_on = "<center><p><i>Click next or press the right-arrow key to move on.</i></p></center>"

var welcome_block = "<center><p>Welcome to the experiment!</p></center>" + move_on
