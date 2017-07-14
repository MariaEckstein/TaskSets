/* jspsych-text.js
 * Josh de Leeuw
 *
 * This plugin displays text (including HTML formatted strings) during the experiment.
 * Use it to show instructions, provide performance feedback, etc...
 *
 * documentation: docs.jspsych.org
 *
 *
 */

jsPsych.plugins["start_new_season"] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    trial.cont_key = trial.cont_key || [];

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // if (trial.season == "hot") {
    //   trial.background = "img/hot.png"
    // } else if (trial.season == "rainy") {
    //   trial.background = "img/rainy.png"
    // } else if (trial.season == "cold") {
    //   trial.background = "img/cold.png"
    // } else {
    //   trial.background = "img/blank.png"
    // }
    // var background =
    //   "<img src=" + trial.background + " style='position:fixed; top:0px; left:0px; bottom:0px; right: 0px' height='100%' width='100%'>"
    //
    // // set the HTML of the display target to replaced_text.
    // display_element.append(background);
    display_element.html(trial.text);

    // reset the point counter
    // points = [0, 0, 0]

    var after_response = function(info) {

      display_element.html(''); // clear the display

      var trialdata = {
        "rt": info.rt,
        "key_press": info.key
      }

      jsPsych.finishTrial(trialdata);

    };

    jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.cont_key,
      rt_method: 'date',
      persist: false,
      allow_held_key: false
    });

    // // finish trial without recording data
    // var trialdata = {
    //   "rt": 0,
    //   "key_press": 0
    // }

    jsPsych.finishTrial(trialdata);

  };

  return plugin;
})();
