// Instructions and preliminaries
// Get demographics
var get_subj_data = {
    on_trial_start: function(){
        console.log(startEvent);
        document.dispatchEvent(startEvent)
    },
  type: "survey-text",
  questions: [
    "SubjID:",
    "Date of birth (please use format yyyy/mm/dd):",
    "Today's date (please use format yyyy/mm/dd):",
    "Sex:",
    // "Occupation:",
    // "Highest degree (obtained or currently obtaining):"
  ],
};

// Put pics together
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
    "<img class='alien' src='img/" + pr_alien_names[3] + ".png'>" +
  "</div></center>"

var sad_alien =
  "<center><div class='alien_box'>" +
    "<img class='alien' src='img/" + pr_alien_names[1] + ".png'>" +
  "</div></center>"

reward_ruler = "<div>" +
    "<img class='ruler' src='img/measuringtape_5cm.png' style='top: 98%'>" +
    //"<p class='reward'>" +
    "</div>"

var happy_alien =
  "<center><div class='alien_box'>" +
    "<img class='alien' src='img/" + pr_alien_names[1] + ".png'>" +
    reward_ruler +
  "</div></center>"

happy_aliens =
  "<center><div class='alien_box'>" +
    "<div>" +
      "<img class='alien' src='img/" + pr_alien_names[0] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 15%'>" +
      "<img class='alien' src='img/" + pr_alien_names[1] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 50%'>" +
    "</div><div>" +
      "<img class='alien' src='img/" + pr_alien_names[2] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 15%'>" +
      "<img class='alien' src='img/" + pr_alien_names[3] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 50%'>" +
    "</div>" +
  "</div></center>"

// Rest
var reward = "<p class='reward'> +5"
var move_on = "<center><p><i>Click 'Next' or press the right-arrow key to move on.</i></p></center>"
var welcome_block = "<center><p>Welcome to the experiment!</p></center>" + move_on

// Instruction slides
instructions1 = "<center><p>In the following game, you will be taking care of four aliens. " +
  "The aliens live on a strange planet and your goal is to <i>help them grow as much as possible</i>.</p>" +
  "<p>Each alien needs different things to thrive. " +
  "One alien might need to chew on a juicy plant in order grow, " +
  "whereas another might need to catch cosmic rays with its big umbrella.</p>" +
  "<p>Over time, <i>you will learn what each alien needs in order to grow</i>.</p></center>" +
  aliens +
  move_on;

instructions2 = "<center><p>The aliens' planet goes through different seasons, " +
  "and <i>aliens need different things depending on these seasons</i>.</p>" +
  "<p>For example, in order to grow, an alien might need to cuddle in a bed in the hot season, " +
  "but it might need to chew on a green plant during the rainy season.</p>" +
  "There are three seasons on the aliens' planet: <i>hot, cold, and rainy</i>:" +
  "<div class='alien_box'>" +
    "<img class='season' src='img/hot.png'>"+
    "<img class='season' src='img/cold.png'>" +
    "<img class='season' src='img/rainy.png'>" +
  "</div>" +
  "<p>Seasons change unpredictably. " +
  "This means that there is <i>no fixed order to seasons</i>, like on our planet. " +
  "Seasons might even differ in length!</p></center>" +
  move_on;

instructions3 = "<center><p>Before the actual game starts, let's practice with these four aliens:</p>" +
  aliens +
  "<p><i>Your job will be to make each one of them grow as much as you can, by learning what each one needs!</i> " +
  "(In the practice round, seasons will not change yet.)</center>" +
  move_on;

instructions4 =
  "<center><p>Whenever an alien needs something, it will pop up on the screen, like the alien below:</p>" +
  sad_alien +
  "<div style='position:relative; top=50px'" +
    "<p>When this happens, you can offer it one of several things to help it grow.</p>" +
    "<p>How about an umbrella for catching cosmic rays? " +
    "In the game, you'll be able to <i>select an item using the keys 'j', 'k', and 'l'</i> on your keyboard. " +
    "'j' will select the left-most item , 'k' the middle one , and 'l' the right one .</p>" +
    "<p>Let's pretend you pressed 'k' and selected the middle option - click 'Next' to see what happens.</p>" +
  "</div>" +
  response_buttons +
  "</center>";

bed_button =
  "<center><div class='response_buttons'>" +
    item_buttons[1] +
  "</div></center>";

instructions5 = "<center><p> The alien liked the umbrella a lot! It grew by 5 centimeters and is very happy! </p>" +
  happy_alien +
  bed_button +
  "</center>";

instructions6 =
  "<center><p>Here's a hint before you start the practice round: " +
  "<i>Each alien's preferences are completely independent of all the other aliens' preferences.</i> " +
  "This means that knowing which item one alien likes does not help you figure out which item another alien likes.</p>" +
  "<p>Also remember that seasons change randomly! " +
  "This means that <i>seasons don't come in order</i>, like on our planet.</p>" +
  "<p>You'll need to decide quickly to win points. Good luck!</p>" +
  "<p>When you are ready, press 'Next' for the practice round. " +
  "Remember, you'll use the keys <i>'j', 'k', and 'l'</i> to select items.</p>" +
  aliens +
  "<p>Press 'Previous' if you'd like to review the instructions before you start.</p>" +
  "</center>";

// Put instruction slides together
var phase1_instructions = {
    on_trial_start: function(){
        document.dispatchEvent(startInstructions);
        document.dispatchEvent(endEvent);
    },
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
  timing_post_trial: 200,
    on_finish: function(){
        document.dispatchEvent(startEvent);
        document.dispatchEvent(endInstructions);
    }
};

// More instructions
instructions7 =
  "<center><p> Great job! You helped these aliens grow a lot! </p>" +
  happy_aliens +
  "<p> When you're ready, press 'Next' to move on to the real game, with <i>four new aliens</i>. </p>" +
  "<p> This time, you'll be on the aliens' planet, so the seasons will change! " +
  "Keep in mind that <i>aliens' preferences depend on the season</i>! </p>" +
  "<p> In the chaotic season, the weather changes quickly from day to day. " +
  "It could be hot one day and rainy the next! </p>"+
  "<p> You will notice that aliens grow differently in different seasons - " +
  "<i>pay attention to how much each alien grows in each season!</i> </p>" +
  "</center>"

var training_instructions_post = {
    on_trial_start: function(){
        document.dispatchEvent(startInstructions);
        document.dispatchEvent(endEvent);
        console.log(startInstructions)
    },
  type: 'instructions',
  pages: [instructions7],
  show_clickable_nav: true,
  timing_post_trial: 200,
    on_finish: function(){
        document.dispatchEvent(startEvent);
        document.dispatchEvent(endInstructions);
        console.log(endInstructions)
    }
}

happy_aliens =
  "<center><div class='alien_box'>" +
    "<div>" +
      "<img class='alien' src='img/" + alien_names[0] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 15%'>" +
      "<img class='alien' src='img/" + alien_names[1] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 50%'>" +
    "</div><div>" +
      "<img class='alien' src='img/" + alien_names[2] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 15%'>" +
      "<img class='alien' src='img/" + alien_names[3] + ".png'>" +
      "<img class='lovebubble' src='img/happy2.png' style='left: 50%'>" +
    "</div>" +
  "</div></center>"

instructions1 =
  "<center><p> Great job! You helped these aliens grow a lot! </p>" +
  happy_aliens +
  move_on +
  "</center>"

var phase1_instructions_post = {
    on_trial_start: function(){
        document.dispatchEvent(startInstructions);
        document.dispatchEvent(endEvent);
    },
  type: 'instructions',
  pages: [instructions1],
  show_clickable_nav: true,
  timing_post_trial: 200,
    on_finish: function(){
        document.dispatchEvent(startEvent);
        document.dispatchEvent(endInstructions)
    }
};

instructions_chaos =
    "<center><p> Great job! You helped these aliens grow a lot! </p>" +
    happy_aliens +
    move_on +
    "</center>"

var chaotic_instructions = {
    type: 'instructions',
    pages: [instructions_chaos],
    show_clickable_nav: true,
    timing_post_trial: 200
}
