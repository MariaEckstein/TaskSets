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
    // trial.text_answer = (typeof trial.text_answer === 'undefined') ? "" : trial.text_answer;
    // trial.correct_text = (typeof trial.correct_text === 'undefined') ? "<p class='feedback'>Correct</p>" : trial.correct_text;
    // trial.incorrect_text = (typeof trial.incorrect_text === 'undefined') ? "<p class='feedback'>Incorrect</p>" : trial.incorrect_text;
    trial.show_stim_with_feedback = (typeof trial.show_stim_with_feedback === 'undefined') ? true : trial.show_stim_with_feedback;
    // trial.is_html = (typeof trial.is_html === 'undefined') ? false : trial.is_html;
    // trial.force_correct_button_press = (typeof trial.force_correct_button_press === 'undefined') ? false : trial.force_correct_button_press;
    // trial.prompt = (typeof trial.prompt === 'undefined') ? '' : trial.prompt;
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

    alien_height = 250
    alien_top = 230
    // sad_top = [alien_top + 100, alien_top + 50, alien_top][trial.sad_alien]
    sad_left = [520, 800, 1050][trial.sad_alien]
    reward_top = alien_top - 27
    reward_left = sad_left + 15
    button_top = alien_top + alien_height + 200
    button_height = 90
    button_dist = 50
    button1_left = 650
    button2_left = button1_left + button_height + button_dist
    button3_left = button2_left + button_height + button_dist
    button4_left = button3_left + button_height + button_dist

    // create Aliens, sadness, and response buttons
    var background = $('<img>', {
      "src": trial.background,
      "style": 'position:fixed; top:0px; left:0px; bottom:0px; right: 0px',
      "height": '100%',
      "width": '100%',
      "class": 'jspsych-categorize-stimulus',
      "id": 'jspsych-categorize-stimulus'
    })

    var aliens = $('<img>', {
      "src": trial.stimulus,
      "style": 'position:absolute; top:' + alien_top + 'px',
      "height": alien_height,
      "class": 'jspsych-categorize-stimulus',
      "id": 'jspsych-categorize-stimulus'
    })

    var sadness = $('<img>', {
      "id": 'jspsych-categorize-stimulus',
      "class": 'jspsych-categorize-stimulus',
      "src": 'img/sad.png',
      "style": 'position:absolute;' +
               'top:' + alien_top + 'px;' +
               'left:' + sad_left + 'px',
      "height": '120'
    })

    var bed = "<img src='img/bed.png' style='position:absolute; top:" + button_top + "px; left:" + button1_left + "px' height=" + button_height + ">"
    var umbrella = "<img src='img/umbrella.png' style='position:absolute; top:" + button_top + "px; left:" + button2_left + "px' height=" + button_height + ">"
    var plant = "<img src='img/plant.png' style='position:absolute; top:" + button_top + "px; left:" + button3_left + "px' height=" + button_height + ">"
    var rock = "<img src='img/rock.png' style='position:absolute; top:" + button_top + "px; left:" + button4_left + "px' height=" + button_height + ">"
    var response_buttons = bed + umbrella + plant + rock

    // add Aliens, sadness, and response buttons to display
    display_element.append(background, aliens, sadness, response_buttons);

    var trial_data = {};

    // create response function
    var after_response = function(info) {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      var correct = false;
      if (trial.key_answer == info.key) {
        correct = true;
      }

      // get location for box around chosen item
      border_left = 0
      if (info.key == 74) {
        border_left = button1_left - 10
      } else if (info.key == 75) {
        border_left = button2_left - 10
      } else if (info.key == 76) {
        border_left = button3_left - 10
      } else if (info.key == 186) {
        border_left = button4_left - 10
      }

      // get feedback amount
      feedback_amount = 0
      if (!correct) {
        feedback_amount = 0
      } else {
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
        "stimulus": trial.stimulus,
        "sad_alien": trial.sad_alien,
        "key_press": info.key
      };

      display_element.html('');

      var timeout = info.rt == -1;
      doFeedback(correct, timeout);
    }

    jsPsych.pluginAPI.getKeyboardResponse({
      callback_function: after_response,
      valid_responses: trial.choices,
      rt_method: 'date',
      persist: false,
      allow_held_key: false
    });

    if (trial.timing_response > 0) {
      setTimeoutHandlers.push(setTimeout(function() {
        after_response({
          key: -1,
          rt: -1
        });
      }, trial.timing_response));
    }

    function doFeedback(correct, timeout) {

      if (timeout && !trial.show_feedback_on_timeout) {
        display_element.append(trial.timeout_message);
      } else {

        var border = $('<img>', {
          "src": 'img/border.png',
          "style": 'position:absolute;' +
                   'top:' + button_top + 'px;' +
                   'left:' + border_left + 'px;',
          "height": button_height + 20,
          "width": button_height + 30,
        })

        var happiness = $('<img>', {
          "src": 'img/happy.png',
          "style":  'position:absolute;' +
                    'top:' + alien_top + 'px;' +
                    'left:' + sad_left + 'px',
          "height": '120',
          "id": 'jspsych-categorize-stimulus',
          "class": 'jspsych-categorize-stimulus'
        })

        var number_feedback = $('<p>', {
          "style": "color:green;" +
                   "font-size: 46px;" +
                   "position:absolute;" +
                   "top:" + reward_top + "px;" +
                   "left:" + reward_left + "px;",
          "text": '+' + feedback_amount,
          "id": 'jspsych-categorize-stimulus',
          "class": 'jspsych-categorize-stimulus'
        })

        display_element.append(background, aliens, border, response_buttons, happiness, number_feedback);

      }
      setTimeout(function() {
        endTrial();
      }, trial.timing_feedback_duration);
    }

    function endTrial() {
      display_element.html("");
      display_element.append(background);
      jsPsych.finishTrial(trial_data);
    }

  };

  return plugin;
})();
