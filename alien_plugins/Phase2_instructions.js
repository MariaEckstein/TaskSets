
// Instruction slides
happy_aliens =
  "<center><div class='alien_box'>" +
    "<img class='alien' src='img/" + ph1_alien_names[0] + ".png'>" +
    "<img class='alien' src='img/" + ph1_alien_names[1] + ".png'>" +
    "<img class='alien' src='img/" + ph1_alien_names[2] + ".png'>" +
    "<img class='bubble' src='img/happy2.png' style='left: 0%;'>" +
    "<img class='bubble' src='img/happy2.png' style='left: 30%;'>" +
    "<img class='bubble' src='img/happy2.png' style='left: 60%;'>" +
  "</div></center>"

instructions1 =
  "<center><p> Great job! You helped these three aliens grow a lot! </p>" +
  happy_aliens +
  move_on +
  "</center>"

instructions2 =
  "<center><p>Once a year, the aliens celebrate a very special holiday.</p>" +
  "<p>In honor of this day, they hold an extraordinary and amusing competition, " +
  "and they invited <i>you</i> to be part of it!</p>" +
  "[add pic?]" +
  "<p>In the competition, two opponents play against each other. " +
  "Each opponent is taking care of one alien. " +
  "The goal is to make the own alien grow more than the opponent's alien, " +
  "for the amusement of the spectators.</p></center>"
instructions2b =
  "<center><p>Before the competition starts, " +
  "each competitor is allowed to pick the aliens and seasons they want to use in the competition. " +
  "You wil be one of the competitors! Make sure you pick the best aliens and seasons, " +
  "using your experience on the planet so far!</p>" +
  "<p>Click next to learn how the selection process works!</p></center>"

exmpl_alien_season_buttons =
  "<center><div class='response_buttons'>" +
    alien_season_buttons[0] +
    alien_season_buttons[1] +
  "</div></center>"

intro_slide_alien_same_season =
  "<center><p>In the selection process, you will first select which aliens you would prefer in each season. " +
  "For example, you might see the two aliens in the season below. Which alien would you pick, given the season? " +
  "In the following slides, you'll press 'j' to select the picture on top and 'l' for the picture on bottom.</p>"
  "<p>Your opponent will automatically get the alien you did not select.</p>" +
  exmpl_alien_season_buttons +
  "<p>Press 'Next' when you are ready to select your aliens! Press 'Previous' if you want to review the instructions."

exmpl_season_buttons =
  "<center><div class='response_buttons'>" +
    season_buttons[0] +
    season_buttons[1] +
  "</div></center>"

intro_slide_season =
  "<center><p>Great job selecting your aliens!</p>" +
  "<p>Next in the selection process, you will select which seasons you would prefer for the competition. " +
  "For example, you might see the two seasons below. Which one would you rather have?</p>" +
  exmpl_season_buttons +
  "<p>Your opponent will automatically get the other season!"

exmpl_alien_buttons =
  "<center><div class='response_buttons'>" +
    alien_buttons[0] +
    alien_buttons[1] +
  "</div></center>"

intro_slide_alien =
  "<center><p>Thank you for selecting your seasons!<p>" +
  "<p>Next in the selection process, you will select which aliens you would prefer for the competition, independent of the season. " +
  "For example, you might see the two aliens below. Which one would you pick?</p>" +
  exmpl_alien_buttons +
  "<p>Your opponent will automatically get the other alien! "

exmpl_item_buttons =
  "<center><div class='response_buttons'>" +
    item_buttons[0] +
    item_buttons[1] +
  "</div></center>"

intro_slide_item =
  "<center><p>Thank you for selecting your aliens!<p>" +
  "<p>Next in the selection process, you will select which items you would prefer for the competition. " +
  "For example, you might see the two items below. Which one would you pick?</p>" +
  exmpl_item_buttons +
  "<p>Your opponent will automatically get the other alien! "

exmpl_alien_season_buttons_rest =
  "<center><div class='response_buttons'>" +
    alien_season_buttons[0] +
    alien_season_buttons[5] +
  "</div></center>"

intro_slide_alien_rest_season =
  "<center><p>Last in the selection process, " +
  "you can indicate which combinations of aliens and seasons you would prefer for the competition. " +
  "For example, you might see two aliens in two different seasons, like below. " +
  "Which combination of alien and season would you pick?</p>" +
  exmpl_alien_season_buttons_rest +
  "<p>Your opponent will automatically get the other one!"

// Put instruction slides together
intro_alien_same_seasonn = {
type: "instructions",
pages: [intro_slide_alien_same_season],
show_clickable_nav: true,
}
intro_season = {
type: "instructions",
pages: [intro_slide_season],
show_clickable_nav: true,
}
intro_alien = {
type: "instructions",
pages: [intro_slide_alien],
show_clickable_nav: true,
}
intro_item = {
type: "instructions",
pages: [intro_slide_item],
show_clickable_nav: true,
}
intro_alien_rest_season = {
type: "instructions",
pages: [intro_slide_alien_rest_season],
show_clickable_nav: true,
}

var phase2_instructions = {
  type: 'instructions',
  pages: [
      instructions1,
      instructions2,
      instructions2b,
      intro_slide_alien_same_season,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}
