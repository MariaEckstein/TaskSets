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

    // create Aliens, sadness, and response buttons
    var background =
      "<img src=" + trial.background + " style='position:fixed; top:0px; left:0px; bottom:0px; right: 0px' height='100%' width='100%'>"

    c_alien_tops = [25, 35, 45]
    point_tops = [0, 60, 120]
    trial.points = [0, 1, 2]
    alien0_counter =
        trial.aliens[0] + " style='position:absolute; right:50px; top:" + c_alien_tops[0] + "px;' height=" + alien_height_point_counter + ">" +
        "<p style='position:absolute; right:0px; top:" + point_tops[0] + "px; font-size:46px;'>" + trial.points[0]

    alien1_counter =
        trial.aliens[1] + " style='position:absolute; right:50px; top:" + c_alien_tops[1] + "px;' height=" + alien_height_point_counter + ">" +
        "<p style='position:absolute; right:0px; top:" + point_tops[1] + "px; font-size:46px;'>" + trial.points[1]

    alien2_counter =
        trial.aliens[2] + " style='position:absolute; right:50px; top:" + c_alien_tops[2] + "px;' height=" + alien_height_point_counter + ">" +
        "<p style='position:absolute; right:0px; top:" + point_tops[2] + "px; font-size:46px;'>" + trial.points[2]

    point_counters =
      "<div>" +
        alien0_counter +
        alien1_counter +
        alien2_counter +
      "</div>"

    sad_alien =
      "<center><div style='position:relative;'>" +
        point_counters +
        trial.aliens[trial.sad_alien] + " height=" + alien_height + ">"
        speach + exclamation_points +
      "</div></center>"

    shuffled_buttons = shuffle(buttons)
    response_buttons =
      "<center><div class='response_buttons' style='position:relative; border: 100px solid transparent; z=10;'>" +
        shuffled_buttons[0] +
        shuffled_buttons[1] +
        shuffled_buttons[2] +
      "</div></center>"

    // add Aliens, sadness, and response buttons to display
    display_element.append(background);
    display_element.append(sad_alien, response_buttons);
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
        key: 0,
        rt: rt
      };
      after_response(info);
    });

    $('#umbrella-button').on('click', function() {
      clear_button_handlers();
      var response_time = (new Date()).getTime();
      var rt = response_time - trial.start_time;
      info = {
        key: 1,
        rt: rt
      };
      after_response(info);
    });

    $('#plant-button').on('click', function() {
      clear_button_handlers();
      var response_time = (new Date()).getTime();
      var rt = response_time - trial.start_time;
      info = {
        key: 2,
        rt: rt
      };
      after_response(info);
    });

    $('#rock-button').on('click', function() {
      clear_button_handlers();
      var response_time = (new Date()).getTime();
      var rt = response_time - trial.start_time;
      info = {
        key: 3,
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
        if (info.key == 0) {
          feedback_amount = trial.feedback_amounts[0]
        } else if (info.key == 1) {
          feedback_amount = trial.feedback_amounts[1]
        } else if (info.key == 2) {
          feedback_amount = trial.feedback_amounts[2]
        }
      }

      // trial.points[info.key] = trial.points[info.key] + feedback_amount

      // save data
      trial_data = {
        "rt": info.rt,
        "correct": correct,
        "reward": feedback_amount,
        "stimulus": trial.stimulus,
        "sad_alien": trial.sad_alien,
        "season": trial.season,
        "key_press": info.key,
        "point_count": trial.points,
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
        var happy_alien =
          "<center><div style='position:relative;'>" +
            trial.aliens[trial.sad_alien] + " height=" + alien_height + ">" +
            speach +
            "<p style='color:green; position:absolute; left:" + reward_left + "px; top:" + reward_top + "px; font-size:46px;'> +" + feedback_amount +
          "</div></center>"

        display_element.append(background, happy_alien, response_buttons);

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
