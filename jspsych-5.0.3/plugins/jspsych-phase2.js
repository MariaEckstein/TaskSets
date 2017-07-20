/**
 * jspsych plugin for categorization trials with feedback
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 **/


jsPsych.plugins["phase2"] = (function() {

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
    shuffled_buttons = shuffle(trial.buttons);
    response_buttons =
      "<center><div class='response_buttons' style='position:relative; border: 100px solid transparent; z=10;'>" +
        shuffled_buttons[0] +
        shuffled_buttons[1] +
      "</div></center>"

    // display buttons
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

      // save data
      trial_data = {
        "rt": info.rt,
        "key_press": info.key,
        "assess": trial.assess,
        "key-left": shuffled_buttons[0],
        "key-right": shuffled_buttons[1],
      };

      display_element.html('');

      var timeout = info.rt == -1;
      correct = -1;
      doFeedback(info.key, timeout);
    }

    // take care of button presses: record data
    if (input_device == "mouse") {
      function clear_button_handlers() {
        for (btn = 0; btn < all_sa_button_names.length; btn ++) {
          $(all_sa_button_names[btn]).off('click');
        }
      }

      for (let i = 0; i < all_sa_button_names.length; i ++) {
        $(all_sa_button_names[i]).on('click', function() {
            clear_button_handlers();
            var response_time = (new Date()).getTime();
            var rt = response_time - trial.start_time;
            info = {
              key: all_sa_button_names[i],
              rt: rt
            };
            after_response(info);
        });
      }

    } else if (input_device == "keyboard") {
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'date',
        persist: false,
        allow_held_key: false
      });
    }

    var trial_data = {};
    if (trial.timing_response > 0) {
      setTimeoutHandlers.push(setTimeout(function() {
        after_response({
          key: -1,
          rt: -1
        });
      }, trial.timing_response));
    }

    function doFeedback(key, timeout) {

      if (timeout && !trial.show_feedback_on_timeout) {
        display_element.append(trial.timeout_message);
      } else {
        display_element.html('');

        // selected_response_button =
        //   "<center><div class='response_buttons' style='position:relative; border: 100px solid transparent; z=10;'>" +
        //     shuffled_buttons[0] +
        //     shuffled_buttons[1] +
        //   "</div></center>"
        // display_element.append(selected_response_button);
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
