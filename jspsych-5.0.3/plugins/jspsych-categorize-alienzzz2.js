/**
 * jspsych plugin for categorization trials with feedback
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 **/


jsPsych.plugins["categorize-alienzzz2"] = (function() {

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

    if (trial.season == "hot") {
      trial.background = "img/hot.png"
    } else if (trial.season == "rainy") {
      trial.background = "img/rainy.png"
    } else if (trial.season == "cold") {
      trial.background = "img/cold.png"
    } else {
      trial.background = "img/blank.png"
    }

    var sad_left = sad_lefts[trial.sad_alien]
    var reward_left = sad_left + 15

    // create Aliens, sadness, and response buttons
    var background =
      "<img src=" + trial.background + " style='position:fixed; top:0px; left:0px; bottom:0px; right: 0px' height='100%' width='100%'>"

    var sad_aliens =
      "<center><div style='position:relative;'>" +
        "<img src=" + trial.stimulus + " height=" + alien_height + ">" +
        "<img src='img/happy.png' style='position:absolute; left:" + sad_left + "px;' height=120>" +
        "<p style='color:red; position:absolute; left:" + reward_left + "px; top:" + reward_top + "px; font-size:46px;'> !!!!" +
      "</div></center>"

    // add Aliens, sadness, and response buttons to display
    display_element.append(background, sad_aliens, response_buttons);
    trial.start_time = (new Date()).getTime();

    // take care of button presses: mimic key presses
    function clear_button_handlers() {
      $('#bed-button').off('click');
      $('#umbrella-button').off('click');
      $('#plant-button').off('click');
      $('#rock-button').off('click');
    }

    $('#bed-button').on('click', function() {
      clear_button_handlers();
      var response_time = (new Date()).getTime();
      var rt = response_time - trial.start_time;
      info = {
        key: 74,
        rt: rt
      };
      after_response(info);
    });

    $('#umbrella-button').on('click', function() {
      clear_button_handlers();
      var response_time = (new Date()).getTime();
      var rt = response_time - trial.start_time;
      info = {
        key: 75,
        rt: rt
      };
      after_response(info);
    });

    $('#plant-button').on('click', function() {
      clear_button_handlers();
      var response_time = (new Date()).getTime();
      var rt = response_time - trial.start_time;
      info = {
        key: 76,
        rt: rt
      };
      after_response(info);
    });

    $('#rock-button').on('click', function() {
      clear_button_handlers();
      var response_time = (new Date()).getTime();
      var rt = response_time - trial.start_time;
      info = {
        key: 186,
        rt: rt
      };
      after_response(info);
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

    // create response function
    var after_response = function(info) {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      var correct = 0;
      if (trial.key_answer == info.key) {
        correct = 1;
      }

      // get feedback amount
      feedback_amount = 0
      if (correct) {
        if (info.key == 74) {
          feedback_amount = trial.feedback_amounts[0]
        } else if (info.key == 75) {
          feedback_amount = trial.feedback_amounts[1]
        } else if (info.key == 76) {
          feedback_amount = trial.feedback_amounts[2]
        }
      }

      // save data
      trial_data = {
        "rt": info.rt,
        "correct": correct,
        "reward": feedback_amount,
        "stimulus": trial.stimulus,
        "sad_alien": trial.sad_alien,
        "season": trial.season,
        "key_press": info.key
      };

      display_element.html(''); // not sure what it does... remove?

      var timeout = info.rt == -1;
      doFeedback(correct, timeout);
    }

    function doFeedback(correct, timeout) {

      if (timeout && !trial.show_feedback_on_timeout) {
        display_element.append(trial.timeout_message);
      } else {

        // Add happy frame and number feedback to aliens
        var happy_aliens =
          "<center><div style='position:relative;'>" +
            "<img src=" + trial.stimulus + " height=" + alien_height + ">" +
            "<img src='img/happy.png' style='position:absolute; left:" + sad_left + "px;' height=120>" +
            "<p style='color:green; position:absolute; left:" + reward_left + "px; top:" + reward_top + "px; font-size:46px;'> +" + feedback_amount +
          "</div></center>"

        display_element.append(background, happy_aliens, response_buttons);

      }
      setTimeout(function() {
        endTrial();
      }, trial.timing_feedback_duration);
    }

    function endTrial() {
      display_element.html("");
      display_element.append(background);
      // jsPsych.data.displayData();  // for debugging only!
      jsPsych.finishTrial(trial_data);
    }

  };

  return plugin;
})();
