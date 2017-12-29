
jsPsych.plugins["pick-aliens"] = (function() {

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
    button_order = shuffle([0, 1])
    l_button_html = trial.buttons[button_order[0]]
    r_button_html = trial.buttons[button_order[1]]
    l_button_name = trial.button_names[button_order[0]]
    r_button_name = trial.button_names[button_order[1]]

    // shuffled_buttons = shuffle(trial.buttons)
    response_buttons =
      "<center><div class='response_buttons'>" +
        l_button_html + r_button_html +
      "</div></center>"

    // display buttons
    display_element.html("");
    display_element.append(response_buttons);
    trial.start_time = (new Date()).getTime();

    // create response function
    var after_response = function(info) {

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
      }

      // save data
      trial_data = {
        "rt": info.rt,
        "key": info.key,
        "assess": trial.assess,
        "item_left": l_button_name,
        "item_right": r_button_name,
        "item_chosen": chosen_button_name,
        "phase": 2,
      };
      console.log(chosen_button_name);

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
