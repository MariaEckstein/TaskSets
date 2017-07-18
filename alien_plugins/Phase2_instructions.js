
// Instruction slides
happy_aliens =
  "<center><div style='position:relative;'>" +
    phase1_aliens[0] + "height=" + alien_height + ">" +
    phase1_aliens[1] + "height=" + alien_height + ">" +
    phase1_aliens[2] + "height=" + alien_height + ">" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[0] + "px;' height=120>" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[1] + "px;' height=120>" +
    "<img src='img/happy2.png' style='position:absolute; left:" + sad_lefts[2] + "px;' height=120>" +
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
  "<p>In the competition, two opponents play against each other. " +
  "Each opponent is taking care of one alien. " +
  "The goal is to make the own alien grow more than the opponent's alien, " +
  "for the amusement of the spectators.</p>" +
  "<p>Before the competition can start, " +
  "the seasons and aliens for each competitor are selected according to a complicated process. " +
  "Each competitor is allowed to pick aliens and seasons for themselves. " +
  "Nevertheless, the selection process is complicated, so you as a competitor will need to "+
  "indiciate your choices more than once. " +
  "Answer carefully each time to make sure you'll end up with the aliens and seasons " +
  "that will let you win the competition!</p>" +
  "<p>Click next to learn how the selection process works in detail!</p>"

exmpl_alien_buttons =
  "<center><div class='response_buttons' style='position:relative; border: 100px solid transparent; z=10;'>" +
    alien_buttons[0] +
    alien_buttons[1] +
  "</div></center>"

instructions3 =
  "<center><p>Here is how the selection process works in detail.</p>" +
  "<p>You will see two options side-by-side, for example these two aliens:</p>" +
  exmpl_alien_buttons +
  "<p>You will pick the alien you want for the competition - " +
  "your opponent will automatically get the other one. " +
  "Make sure you pick the better alien, using your experience with aliens so far!</p>" +
  "<p>Note: You will not only select aliens, but also seasons. " +
  "You will pick many aliens in this procedure, but you won’t have to compete with each one of them. " +
  "Still make sure that each decision is right!</p></center>"

// Put instruction slides together
var phase2_instructions = {
  type: 'instructions',
  pages: [
      instructions1,
      instructions2,
      instructions3
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}
