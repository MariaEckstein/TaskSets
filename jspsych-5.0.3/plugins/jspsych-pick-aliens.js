
jsPsych.plugins["pick-aliens"] = (function() {

    /*
    DOCUMENTATION

    pick-aliens displays a single trial in the pick-aliens phase of the Aliens task.
    In each trial, participants see two images and need to select one. The
    images can eiher be two different seasons, two different aliens, or two
    different aliens in the same season. The goal is to select the picture that
    has the larger "value", i.e., was associated with larger overall reward during
    the intial-learning phase. There is no feedback.

    pick-aliens requires the following variables:
    button_names: an array of two xyz_names (e.g., [xyz_names[0], xyz_names[1]])
      xyz_names can be one of:
      season_names = jsPsych.randomization.shuffle(["hot", "cold", "rainy"])
      item_names = jsPsych.randomization.shuffle(["bed", "umbrella", "plant"])
      alien_names = jsPsych.randomization.shuffle(["alien1", "alien2", "alien3", "alien4"])
      Also saved in the trial data (item_left_name, item_right_name, item_chosen_name)
    buttons: an array of two alien_buttons (e.g., [xyz_buttons[0], xyz_buttons[1]])
      xyz_buttons are xyz_names, translated into html, e.g.,
      "<img class='phase2_button' src='img/" + alien_names[al] + ".png' id='" + alien_names[al] + "-button'>"
    assess: class of the shown pictures, e.g., "alien", "item", "season", "season-alien"
      Its only use: saved in the trial data
    in addition to the standard jsPych variables like choice, timing_response, etc.

    pick-aliens was created by maria.eckstein@berkeley.edu, based on code
    from Josh de Leuw's awesome jsPsych library.
    */

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('animation', 'stimulus', 'image');

  plugin.trial = function(display_element, trial) {

    // default parameters
    trial.show_stim_with_feedback = (typeof trial.show_stim_with_feedback === 'undefined') ? true : trial.show_stim_with_feedback;
    trial.show_feedback_on_timeout = (typeof trial.show_feedback_on_timeout === 'undefined') ? false : trial.show_feedback_on_timeout;
    trial.timeout_message = trial.timeout_message || "<p>Please respond faster.</p>";
    // timing params
    trial.timing_stim = trial.timing_stim || -1; // default is to show image until response
    trial.timing_response = trial.timing_response || -1; // default is no max response time
    trial.timing_feedback_duration = trial.timing_feedback_duration || 2000;

    // if any trial variables are functions
    // this evaluates the function and replaces
    // it with the output of the function
    trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial);

    // this array holds handlers from setTimeout calls
    // that need to be cleared if the trial ends early
    var setTimeoutHandlers = [];

    // prepare the two buttons that will be shown
    button_order = jsPsych.randomization.shuffle([0, 1])
    l_button_html = trial.buttons[button_order[0]]
    r_button_html = trial.buttons[button_order[1]]
    l_button_name = trial.button_names[button_order[0]];
    r_button_name = trial.button_names[button_order[1]];

    response_buttons =
      "<center><div class='response_buttons'>" +
        l_button_html + r_button_html +
      "</div></center>"

    // display buttons
    display_element.html("");
    display_element.append(response_buttons);
    trial.start_time = (new Date()).getTime();

    //*******STIMULI TRIGGER**********
    if (trial.assess == 'season'){
      var seasonvar = String(trial.button_names[button_order[0]]).concat(String(trial.button_names[button_order[1]]))
      document.dispatchEvent(window[seasonvar]);
      console.log(window[seasonvar])
    }
    else{
      document.dispatchEvent(compOther);
      console.log(compOther)
    }

    // create response function
    var after_response = function(info) {
        //*****RESPONSE TRIGGER*****
        if (info.rt != -1) {
            var response = 'response'.concat(String.fromCharCode(event.keyCode));
            console.log(window[response]);
        }

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      // get id of selected and non-selected stimuli
      if (info.key == left_key) {
        chosen_button_name = l_button_name;
        unchosen_button_name = r_button_name;
      } else if (info.key == right_key) {
        chosen_button_name = r_button_name;
        unchosen_button_name = l_button_name;
      } else {
        chosen_button_name = NaN
      }

      // save data
      trial_data = {
        "rt": info.rt,
        "key": info.key,
        "assess": trial.assess,
        "item_left_name": l_button_name,
        "item_right_name": r_button_name,
        "item_chosen_name": chosen_button_name,
        "phase": trial.phase,
      };

      var timeout = info.rt == -1;
      correct = -1;
      doFeedback(timeout);
    }

    // take care of button presses: record data
    jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.choices,
      rt_method: 'date',
      persist: false,
      allow_held_key: false
    });

    var trial_data = {};
    if (trial.timing_response > 0) {
      setTimeoutHandlers.push(setTimeout(function() {
        after_response({
          key: -1,
          rt: -1
        });
      }, trial.timing_response));
    }

    function doFeedback(timeout) {

      if (timeout && !trial.show_feedback_on_timeout) {
        display_element.html("");
        display_element.append(trial.timeout_message);
          //**********TIMEOUT TRIGGER*******
          document.dispatchEvent(missedTrial);
          console.log(missedTrial);
        trial.timing_feedback_duration = 4 * trial.timing_feedback_duration;  // message stays on longer if there was no button press
      } else {
        // hide non-selected stimulus
        $("#" + unchosen_button_name + "-button").css('visibility', 'hidden');
      }
      setTimeout(function() {
        endTrial();
      }, trial.timing_feedback_duration);
    }

    function endTrial() {
      display_element.html("");
      jsPsych.finishTrial(trial_data);
    }

  };

  return plugin;
})();
