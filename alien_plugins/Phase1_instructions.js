// Instructions and preliminaries
// Get demographics
var get_subj_data = {
  type: "survey-text",
  questions: [
    "SubjID:",
    "Date of birth (mm/dd/yyyy):",
    "Occupation:",
    "Highest degree (obtained or currently obtaining):"
  ]
}

// Goodbye block
var goodbye = {
  type: 'instructions',
  pages: ["<center><p>The game is now over, you did a great job!</p>" +
    "<p>Thank you for participating in the experiment!</p>" +
    "<p>Please fill out the questionnaire on the next page; then click Next to download the data!</p></center>"],
  show_clickable_nav: true
}

// questionnaire
var strategy_questionnaire = {
  type: "survey-text",
  questions: [
    "<center><p>Plase fill out the following questions. " +
      "You can adjust the size of the text boxes by pulling on the right bottom corners. " +
      "You don't need to answer all questions if you don't want to. " +
      "<i>Please still click Submit Answers at the bottom of the page because your data will not be saved otherwise.</i></p></center>" +
    "In the first part of this experiment (helping aliens grow in different seasons), " +
      "how did you learn which items go with which aliens?",
    "In the second part (selecting aliens and seasons for the competition), " +
      "how did you decide which seasons to pick? How did you decide which aliens and items to pick?",
    "In the next part (taking care of unknown aliens without feedback), " +
      "how did you decide which items to give to which aliens?",
    "In the last part (rainbow season), " +
      "how did you decide which items to give to each alien?",
    "In general, did you have a gut feeling for which aliens / seasons / items were better or worse?",
    "Did you have preferences for certain aliens / seasons / items? Why?",
    "What made learning easy or hard for you in this task?"
  ]
}


// Put things together
item_buttons
response_buttons =
  "<center><div class='response_buttons'>" +
    item_buttons[0] +
    item_buttons[1] +
    item_buttons[2] +
  "</div></center>"

var aliens =
  "<center><div class='alien_box'>" +
    "<img class='alien' src='img/" + pr_alien_names[0] + ".png'>" +
    "<img class='alien' src='img/" + pr_alien_names[1] + ".png'>" +
    "<img class='alien' src='img/" + pr_alien_names[2] + ".png'>" +
  "</div></center>"

var sad_alien =
  "<center><div class='alien_box'>" +
    "<img class='alien' src='img/alien6.png'>" +
  "</div></center>"

reward_bubble = "<div>" +
    "<img class='bubble' src='img/speech.png'>" +
    "<p class='reward'> +5" +
  "</div>"

var happy_alien =
  "<center><div class='alien_box'>" +
    "<img class='alien' src='img/alien6.png'>" +
    reward_bubble +
  "</div></center>"

happy_aliens =
  "<center><div class='alien_box'>" +
    "<img class='alien' src='img/" + pr_alien_names[0] + ".png'>" +
    "<img class='alien' src='img/" + pr_alien_names[1] + ".png'>" +
    "<img class='alien' src='img/" + pr_alien_names[2] + ".png'>" +
    "<img class='bubble' src='img/happy2.png' style='left: 0%;'>" +
    "<img class='bubble' src='img/happy2.png' style='left: 30%;'>" +
    "<img class='bubble' src='img/happy2.png' style='left: 60%;'>" +
  "</div></center>"

// Rest
var reward = "<p class='reward'> +5"
var move_on = "<center><p><i>Click next or press the right-arrow key to move on.</i></p></center>"
var welcome_block = "<center><p>Welcome to the experiment!</p></center>" + move_on

// Instruction slides
instructions1 = "<center><p>In the following game, you will be taking care of three aliens. " +
  "The aliens live on a strange planet and your goal is to help them grow as fast as possible.</p>" +
  "<p>Each alien needs different things to thrive. " +
  "One alien might need to chew on a shiny rock in order grow, " +
  "whereas another might need to catch cosmic rays with its red umbrella.</p>" +
  "<p>Over time, you will learn what each alien needs in order to grow.</p></center>" +
  aliens +
  move_on

instructions2 = "<center><p>The aliens' planet goes through different seasons, " +
  "and aliens will need different things depending on these seasons.</p>" +
  "<p>For example, in order to grow, one alien might need to sleep in a bed in the hot season, " +
  "but it might need to chew on a shiny rock during the rainy season.</p>" +
  "There are three seasons on the aliens' planet: <i>hot, cold, and rainy</i>:" +
  "<div class='alien_box'>" +
    "<img class='season' src='img/hot.png'>" +
    "<img class='season' src='img/cold.png'>" +
    "<img class='season' src='img/rainy.png'>" +
  "</div></center>" +
  move_on

instructions3 = "<center><p>Before the actual game, let's practice with these three aliens:</p>" +
  aliens +
  "<p>Try to make each one of them grow as much as you can, by learning what each one needs! " +
  "(This is a practice round, so seasons will not change yet.)</center>" +
  move_on

instructions4 =
  "<center><p>Whenever an alien needs something, it will pop up on the screen, like the green alien below:</p>" +
  sad_alien +
  "<div style='position:relative; top=50px'" +
    "<p>When this happens, you can offer the alien one of several things to help it grow.</p>" +
    "<p>How about a nap in the cozy bed? " +
    "In the game, you'll be able to select an item using the keys <i>'j', 'k', and 'l'</i> on your keyboard. " +
    "'j' will select the left-most item (bed in this case), 'k' middle one (umbrella), and 'l' the right one (plant).</p>" +
    "<p>Let's pretend you pressed 'j' and offered the alien a nap in the green bed - click Next to see what happens.</p>" +
  "</div>" +
  response_buttons +
  "</center>"

instructions5 = "<center><p> The green alien liked the nap a lot! It is all happy now and it grew by 5 centimeters! </p>" +
  happy_alien +
  response_buttons +
  "</center>"

instructions6 = "<center><p> When you are ready, you can press Next for a practice round of the game. " +
  "Remember, you'll use the keys <i>'j', 'k', and 'l'</i> to select the items.</p>" +
  "<p>Press Previous if you'd like to review the instructions before you start.</p>" +
  aliens +
  "<p>Try to learn which item makes each alien grow most!</p></center>"

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
  type: "phase1",
  phase: "training",
  season: "training",
  choices: [left_key, middle_key, right_key],
  aliens: ph1_alien_names,
  feedback_amounts: training_rewards,
  show_stim_with_feedback: true,
  randomize_order: true,
  timing_feedback_duration: feedback_duration_train,
  timing_response: max_RT_train,
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
