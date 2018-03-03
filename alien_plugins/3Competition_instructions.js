
// Instruction slides
instructions1 =
  "<center><p>The time for the competition has come!</p>" +
  "<p>Your goal is to <b>pick the aliens and seasons that give the largest rewards (<i>longest measuring tape</i>)!</b><p/>" +
  "<p>Use your knowledge from the game so far to select " +
  "the <i>aliens that grow fastest</i>, " +
  "the <i>seasons in which aliens grow fastest</i>, " +
  "and the <i>combinations of aliens and seasons, in which aliens grow fastest</i>!" +
  "<p>Click 'Next' to for an example!</p></center>"

exmpl_season_buttons =
  "<center><div class='response_buttons'>" +
    season_buttons[0] +
    season_buttons[1] +
  "</div></center>"

intro_slide_season =
  "<center><p>You will see two seasons at a time, like below.</p>" +
  "<p><i>Pick the one, in which aliens grow more (larger measuring tapes) if given the correct item.</i> " +
  "<p>You will press 'j' for the season on top and 'l' for the season at the bottom.</i></p>" +
  "Press the right arrow to begin." +
  exmpl_season_buttons

exmpl_alien_season_buttons =
  "<center><div class='response_buttons'>" +
    alien_season_buttons[0] +
    alien_season_buttons[1] +
  "</div></center>"

intro_slide_alien_same_season =
  "<center><p>You will now select the best aliens for each season.<p> " +
  "<p>You will see two aliens at a time, like below.</p>" +
  "<p><i>Pick the one that grows more in this season (larger measuring tape) if given the correct item.</i></p> " +
  "<p>Again, you will press 'j' for the alien on top and 'l' for the alien at the bottom. " +
  "Press the right arrow to begin.</p>" +
  exmpl_alien_season_buttons

exmpl_alien_buttons =
  "<center><div class='response_buttons'>" +
    alien_buttons[0] +
    alien_buttons[1] +
  "</div></center>"

intro_slide_alien =
  "<center><p>You will now select the best aliens overall.</p> " +
  "<p>You will see two aliens at a time, like below.</p>" +
  "<p><i>Pick the one that grows more overall (larger measuring tape) if given the correct items in each season.</i></p> " +
  "<p>Again, you will press 'j' for the alien on top and 'l' for the alien at the bottom. " +
  "Press the right arrow to begin.</p>" +
  exmpl_alien_buttons

exmpl_item_buttons =
  "<center><div class='response_buttons'>" +
    item_buttons[0] +
    item_buttons[1] +
  "</div></center>"

intro_slide_item =
  "<center><p>Thank you for selecting your aliens!<p>" +
  "<p>Next in the selection process, you will select which <i>items</i> you would prefer for the competition. " +
  "For example, you might see the two items below. Which one would you pick?</p>" +
  "<p><i>In the competititon, you will press 'j' for the alien on top and 'l' for the alien on the bottom.</i>.</p>" +
  exmpl_item_buttons +
  "<p>Your opponent will automatically get the other alien! "
//
// exmpl_alien_season_buttons_rest =
//   "<center><div class='response_buttons'>" +
//     alien_season_buttons[0] +
//     alien_season_buttons[5] +
//   "</div></center>"
//
// intro_slide_alien_rest_season =
//   "<center><p>Last in the selection process, " +
//   "you can indicate which <i>combinations of aliens and seasons</i> you would prefer for the competition. " +
//   "For example, you might see two aliens in two different seasons, like below. " +
//   "Which combination of alien and season would you pick?</p>" +
//   "<p><i>In the competititon, you will press 'j' for the alien on top and 'l' for the alien on the bottom.</i>.</p>" +
//   exmpl_alien_season_buttons_rest +
//   "<p>Your opponent will automatically get the other one!"

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
  pages: [instructions1],
  show_clickable_nav: true,
  timing_post_trial: 200
}
