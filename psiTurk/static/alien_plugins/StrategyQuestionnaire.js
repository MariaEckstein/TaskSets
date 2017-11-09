
// questionnaire
questionnaire_instructions =
  "<center><p>Plase fill out the following questions. " +
  "Adjust the size of the text boxes by pulling on the three lines in the right bottom corners.</p>" +
  "<p>You don't need to answer all questions if you don't want to. " +
  "<i>Please still click Submit Answers at the bottom of the page because your data will not be saved otherwise.</i></p></center>"
quest1 =
  "<p>1. Recall the first part of this experiment, in which seasons changed and you took care of 4 aliens.</p>" +
  "<p><i>How did you learn which items go with which aliens?</i><p>"
quest2 =
  "<p>2. Now recall the cloudy time, when you could not see the current season.<p>" +
  "<p><i>How did you make choices during this time?</i></p>"
quest3 =
  "<p>3. Now recall the part right before the competition, when you selected aliens and seasons.<p>" +
  "<p><i>How did you decide which seasons to pick? How did you decide which aliens and items to pick?</i></p>"
quest4 =
  "<p>Now recall the next part, in which you took care of some aliens that you had not seen before, without getting feedback.</p> " +
  "<p><i>How did you decide which items you would give to each alien?</i></p>"
quest5 =
  "<p>4. Now, recall the rainbow season at the very end.</p>" +
  "<p><i>How did you decide which items to give to each alien?</i></p>"

var strategy_questionnaire = {
  type: "survey-text",
  questions: [
    questionnaire_instructions +
    quest1,
    quest2,
    quest3,
    // quest4,  // only if I present phase 3
    quest5,
    "5. In general, did you have a gut feeling for which aliens / seasons / items were better and worse?",
    "6. Did you have preferences for certain aliens / seasons / items? Why?",
    "7. What made learning difficult (or easy) in this task?"
  ]
}

// Goodbye block
var goodbye = {
  type: 'instructions',
  pages: ["<center><p>The game is now over, you did a great job!</p>" +
    "<p>Thank you for participating in the experiment!</p>" +
    "<p>Please click 'Next' and let the experimenter know you are done!</p></center>"],
  show_clickable_nav: true
}
