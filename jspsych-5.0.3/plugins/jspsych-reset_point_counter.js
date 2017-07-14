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

jsPsych.plugins["reset_point_counter"] = (function() {

  var plugin = {};

  plugin.trial = function(display_element, trial) {

    trial.cont_key = trial.cont_key || [];

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // set the HTML of the display target to replaced_text.
    display_element.html(trial.text);

    // reset the point counter
    points = [0, 0, 0]

  //   function wait(ms){
  //    var start = new Date().getTime();
  //    var end = start;
  //    while(end < start + ms) {
  //      end = new Date().getTime();
  //    }
  //  }

    // finish trial without recording data
    var trialdata = {
      "rt": 0,
      "key_press": 0
    }

    // wait(2000);
    jsPsych.finishTrial(trialdata);

  };

  return plugin;
})();
