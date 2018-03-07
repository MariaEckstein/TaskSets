
// questionnaire
questionnaire_instructions =
  "<center><p>This questionnaire is the final part of the experiment. " +
  "You can <i>adjust the size of the text boxes</i> by pulling on the right bottom corner.</p>" +
  "<p><b>QUESTIONNAIRE</b></p>" +
  "<p>You don't need to answer all questions if you don't want to. " +
  "<i>Please still click Submit Answers at the bottom of the page because your data will not be saved otherwise.</i></p></center>"
quest1 =
  "<p>Recall the first part of this experiment in which seasons changed and you took care of 4 aliens.</p>" +
  "<p><i>How did you learn which items go with which aliens?</i><p>"
quest2 =
  "<p>Now recall the cloudy time, when you could not see the current season.<p>" +
  "<p><i>How did you make choices during this time?</i></p>"
quest3 =
  "<p>Recall the part of this experiment in which you selected aliens, seasons, etc. for the competition.</p>" +
  // "<p>Now recall the part right before the competition, when you selected aliens and seasons.<p>" +
  "<p><i>How did you decide which seasons to pick?</i></p>"
quest3b =
  "<p><i>How did you decide which aliens and items to pick?</i></p>"
quest3c =
  "<p><i>How did you decide which season-alien combinations to pick?</i></p>"
quest4 =
  "<p>Now recall the next part in which you took care of some aliens that you had not seen before, without getting feedback.</p> " +
  "<p><i>How did you decide which items you would give to each alien?</i></p>"
quest5 =
  "<p>Now, recall the rainbow season at the very end.</p>" +
  "<p><i>How did you decide which items to give to each alien?</i></p>"

var strategy_questionnaire = {
  type: "survey-text",
  questions: [
    questionnaire_instructions +
    // quest1,
    // quest2,
    quest3,
    quest3b,
    quest3c,
    // quest4,  // only if I present phase 3
    // quest5,
    // "In general, did you have a gut feeling for which aliens / seasons / items were better and worse than others?",
    // "Did you have preferences for certain aliens / seasons / items? Why?",
    // "What made learning difficult (or easy) in this task?"
  ]
}
