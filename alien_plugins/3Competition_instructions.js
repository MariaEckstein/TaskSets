// Instruction slides
instructions1 =
  "<center><p>The time for the competition has finally come!</p>" +
  "<p>In the competition, two opponents play against each other. " +
  "Each opponent is taking care of some aliens. " +
  "<i>The goal is to make the own aliens grow more than the opponent's aliens</i>, " +
  "for the amusement of the spectators.</p></center>"
instructions2 =
  "<center><p>Before the competition starts, " +
  "each competitor is allowed to pick the aliens and seasons they want to use in the competition. " +
  "You wil be one of the competitors! Make sure you <i>pick the best aliens and seasons</i> " +
  "using your experience in the game so far!</p>" +
  "('Best' here means biggest growth, i.e., longest measuring tape.)" +
  "<p>Click 'Next' to learn how the selection process works!</p></center>"

exmpl_season_buttons =
  "<center><div class='response_buttons'>" +
    season_buttons[0] +
    season_buttons[1] +
  "</div></center>"

intro_slide_season =
  "<center><p>You will first select which <i>seasons</i> you want for the competition. " +
  "For example, you might see the two seasons below. Which one would you pick for yourself?</p>" +
  "<p><i>In the competititon, you will press 'j' for the season on top and 'l' for the season on the bottom.</i>.</p>" +
  exmpl_season_buttons +
  "<p>Your opponent will automatically get the other season!"

exmpl_alien_season_buttons =
  "<center><div class='response_buttons'>" +
    alien_season_buttons[0] +
    alien_season_buttons[1] +
  "</div></center>"

intro_slide_alien_same_season =
  "<center><p>You can now select which <i>aliens</i> you want in each season. " +
  "For example, you might see the two aliens in the season below. Which alien would you pick in this season?</p>" +
  "<p><i>In the competititon, you will press 'j' for the alien on top and 'l' for the alien on the bottom.</i>.</p>" +
  "<p>Your opponent will automatically get the alien you did not select.</p>" +
  exmpl_alien_season_buttons

exmpl_alien_buttons =
  "<center><div class='response_buttons'>" +
    alien_buttons[0] +
    alien_buttons[1] +
  "</div></center>"

intro_slide_alien =
  "<center><p>You can now select which <i>aliens</i> you want in general, that is, independent of the season. " +
  "For example, you might see the two aliens below. Which one would you pick?</p>" +
  "<p><i>In the competititon, you will press 'j' for the alien on the left and 'l' for the alien on the right.</i>.</p>" +
  exmpl_alien_buttons +
  "<p>Your opponent will automatically get the other alien! "

exmpl_item_buttons =
  "<center><div class='response_buttons'>" +
    item_buttons[0] +
    item_buttons[1] +
  "</div></center>"

intro_slide_item =
  "<center><p>You can now select which <i>items</i> you want for the competition. " +
  "For example, you might see the two items below. Which one would you pick?</p>" +
  "<p><i>In the competititon, you will press 'j' for the item on the left and 'l' for the item on the right.</i>.</p>" +
  exmpl_item_buttons +
  "<p>Your opponent will automatically get the other item! "

exmpl_alien_season_buttons_rest =
  "<center><div class='response_buttons'>" +
    alien_season_buttons[0] +
    alien_season_buttons[5] +
  "</div></center>"

intro_slide_alien_rest_season =
  "<center><p>Last in the selection process, " +
  "you can indicate which <i>combinations of aliens and seasons</i> you would prefer for the competition. " +
  "For example, you might see two aliens in two different seasons, like below. " +
  "Which combination of alien and season would you pick?</p>" +
  "<p><i>In the competititon, you will press 'j' for the alien on the left and 'l' for the alien on the right.</i>.</p>" +
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

var phase3_instructions = {
  type: 'instructions',
  pages: [
      instructions1,
      instructions2,
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}
