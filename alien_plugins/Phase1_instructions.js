// Instructions and preliminaries
// Get demographics
var get_subj_data = {
  type: "survey-text",
  questions: ["SubjID:", "Date of birth (mm/dd/yyyy):", "Occupation:", "Highest degree:"]
}

// Instruction slides
instructions1 = "<center><p>In the following game, you will be taking care of three aliens. " +
  "The aliens live on a strange planet and your goal is to help them grow as fast as possible.</p>" +
  "<p>Each alien needs different things to thrive. " +
  "One alien might need to chew on a shiny rock in order grow, " +
  "whereas another might need to catch cosmic rays with its red umbrella.</p>" +
  "<p>Over time, you will learn what each alien needs in order to grow.</p></center>" +
  aliens +
  move_on

instructions2 = "<center><p>The aliens’ planet goes through different seasons, " +
  "and aliens will need different things depending on these seasons.</p>" +
  "<p>For example, in order to grow, one alien might need to chew on a shiny rock in the hot season, " +
  "but it might need to sleep in a bed during the rainy season.</p>" +
  "There are three seasons on the aliens' planet: <i>hot, cold, and rainy</i>:" +
  "<img src='img/hot.png' style='border: 10px solid transparent;' height=" + alien_height + ">" +
  "<img src='img/cold.png' style='border: 10px solid transparent;' hspace='40' height=" + alien_height + ">" +
  "<img src='img/rainy.png' style='border: 10px solid transparent;' hspace='40' height=" + alien_height + "></center>" +
  move_on

instructions3 = "<center><p>Let's practice the game with these three aliens:</p>" +
  aliens +
  "<p>Try to make each one of them grow as much as you can, by learning what each one needs!</p></center>" +
  move_on

instructions4 = "<center><p>Whenever an alien needs something, it will call you, just like the green alien below:</p>" +
  sad_alien +
  "<div style='position:relative; top=50px'" +
    "<p>When an alien is unhappy like this green alien, you can offer it one of several things to cheer it up and help it grow.</p>" +
    "<p>How about a nap in the green bed? In the game, you'll be able to click on an item to offer it to the unhappy alien.</p>" +
    "<p>Let's pretend you offered the alien a nap in the green bed - click Next to see what happens.</p>" +
  "</div>" +
  response_buttons +
  move_on +
  "</center>"

instructions5 = "<center><p> The green alien liked the nap a lot! It is all happy now and it grew by 5 centimeters! </p>" +
  happy_alien +
  response_buttons +
  move_on + "</center>"

instructions6 = "<center><p> When you are ready, you can press Next for a practice round of the game.</p>" +
  "<p>Press Previous if you'd like to review the instructions before you start.</p>" +
  aliens +
  "<p>Try to learn which item each alien likes to help them grow!</p>"
  move_on + "</center>"

// Put instruction slides together
var phase1_instructions = {
  type: 'instructions',
  pages: [
      welcome_block,
      instructions1,
      instructions2,
      instructions3,
      instructions4,
      instructions5,
      instructions6
  ],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Training trials
var training_block = {
  type: "categorize-alienzzz2",
  season: "training",
  aliens: practice_aliens,
  feedback_amounts: training_rewards,
  data: {block: "training"},
  randomize_order: true,
  timing_feedback_duration: 1500,
  timing_response: 15000,
  timeout_message: "<p style='text-align:center; font-size:40px; z=10'>" +
                   "Please respond faster next time! </p>",
  timeline: TS_train
}

// More instructions
instructions7 =
  "<center><p> Great job! You helped these three aliens grow a lot! </p>" +
  happy_aliens +
  "<p> When you're ready, press Next to move on to the real game. </p>" +
  "<p> This time, you'll be on the aliens' planet, so the seasons will change! " +
  "Keep in mind that the aliens' preferences change with the seasons! </p></center>"

var phase1_instructions_post = {
  type: 'instructions',
  pages: [instructions7],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Goodbye block
var goodbye = {
  type: 'instructions',
  pages: ["<center><p>The game is now over, you did a great job!</p>" +
    "<p>Thank you for participating in the experiment!</p>" +
    "<p>Click Next to finish and download the data!</p></center>"],
  show_clickable_nav: true
}
