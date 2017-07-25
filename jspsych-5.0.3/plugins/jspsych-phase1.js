/**
 * jspsych plugin for categorization trials with feedback
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 **/


jsPsych.plugins["phase1"] = (function() {

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

    // get background, alien, point counters, and response buttons
    background = "<img class='background' src=img/" + trial.season + ".png>"
    sad_alien = "<img class='alien' id='sad_alien' src='img/" + trial.aliens[trial.sad_alien] + ".png'>"
    console.log(points)

    point_counters = "<div class='counter_box' id='counter_box'>"
    for (i = 0; i < trial.aliens.length; i ++) {
      point_counters = point_counters.concat(
        "<img class='counter_alien' style='top: ", c_alien_tops[i], "px' src='img/", trial.aliens[i], ".png'>",
        "<p class='counter_number' style='top: ", point_tops[i], "px'>", points[i], "</p>"
      )
    }
    point_counters = point_counters.concat("</div>")
    if (!trial.show_stim_with_feedback) {
      point_counters = " ";
    }

    button_order = shuffle([0, 1, 2])
    shuffled_buttons = [
      item_buttons[button_order[0]],
      item_buttons[button_order[1]],
      item_buttons[button_order[2]]
    ]
    response_buttons =
      "<center><div class='response_buttons' id='response_buttons'>" +
        shuffled_buttons[0] +
        shuffled_buttons[1] +
        shuffled_buttons[2] +
      "</div></center>"

    alien_counters_buttons =
      "<center><div class='alien_box' id='everything'>" +
        sad_alien +
        point_counters +
        response_buttons +
      "</div></center>"

    // display everyting
    display_element.html("");
    display_element.append(background, alien_counters_buttons);

    var trial_data = {};

    // create response function
    var after_response = function(info) {

      // kill any remaining setTimeout handlers
      for (var i = 0; i < setTimeoutHandlers.length; i++) {
        clearTimeout(setTimeoutHandlers[i]);
      }

      // clear keyboard listener
      jsPsych.pluginAPI.cancelAllKeyboardResponses();

      var key = info.key;
      if (key == left_key) {
        item_chosen = button_names[button_order[0]]
      } else if (key == middle_key) {
        item_chosen = button_names[button_order[1]]
      } else if (key == right_key) {
        item_chosen = button_names[button_order[2]]
      } else {
        item_chosen = NaN
      }

      var correct = false;
      if (trial.key_answer == item_chosen) {
        correct = true;
      }
      console.log(info.key, trial.key_answer, trial.key_answer == info.key)

      // get feedback amount
      amount = 1  // incorrect response or no answer
      if (correct) {  // correct response
        for (i = 0; i < button_names.length; i++) {
          if (item_chosen == button_names[i]) {
            amount = trial.feedback_amounts[i]
          }
        }
      }
      noised_amount = amount + 0.3 * randn_bm()
      rounded_amount = Math.round(noised_amount * 10) / 10  // round doesn't round with decimals
      feedback_amount = Math.max(0, rounded_amount)

      // update points
      points[trial.sad_alien] += feedback_amount
      for (i = 0; i < points.length; i++) {
          points[i] = Math.round(10 * points[i]) / 10
      }

      // save data
      trial_data = {
        "rt": info.rt,
        "correct": correct,
        "reward": feedback_amount,
        "sad_alien": trial.sad_alien,
        "season": trial.season,
        "item_left": shuffled_buttons[0],
        "item_center": shuffled_buttons[1],
        "item_right": shuffled_buttons[2],
        "item_chosen": item_chosen,
        "key": info.key,
        "points0": points[0],
        "points1": points[1],
        "points2": points[2],
        "phase": trial.phase,
      };

      display_element.html('');  // clears display before feedback screen

      var timeout = info.rt == -1;
      doFeedback(key, correct, timeout);
    }

    // take care of button presses: mimic key presses
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

    function doFeedback(key, correct, timeout) {

      if (timeout && !trial.show_feedback_on_timeout) {
        display_element.append(trial.timeout_message);
      } else {

      // add reward bubble
      reward_bubble = "<div>" +
          "<img class='bubble' src='img/speech.png'>" +
          "<p class='reward'> +" + feedback_amount +
        "</div>"

      // update point counters
      point_counters = "<div class='counter_box' id='counter_box'>"
      for (i = 0; i < trial.aliens.length; i ++) {
        point_counters = point_counters.concat(
          "<img class='counter_alien' style='top: ", c_alien_tops[i], "px' src='img/", trial.aliens[i], ".png'>",
          "<p class='counter_number' style='top: ", point_tops[i], "px'>", points[i], "</p>"
        )
      }
      point_counters = point_counters.concat("</div>")
      if (!trial.show_stim_with_feedback) {
        point_counters = " ";
        reward_bubble = " ";
      }

      alien_counters_buttons =
        "<center><div class='alien_box'>" +
          sad_alien +
          reward_bubble +
          point_counters +
          response_buttons +
        "</div></center>"

      display_element.append(background, alien_counters_buttons);

      // remove non-clicked buttons
      if (key == 74) {
        disappear_button_id = "#".concat(shuffled_buttons[1].split("id='")[1].split("'>")[0])
        $(disappear_button_id).css('visibility', 'hidden');
        disappear_button_id = "#".concat(shuffled_buttons[2].split("id='")[1].split("'>")[0])
        $(disappear_button_id).css('visibility', 'hidden');
      } else if (key == 75) {
        disappear_button_id = "#".concat(shuffled_buttons[0].split("id='")[1].split("'>")[0])
        $(disappear_button_id).css('visibility', 'hidden');
        disappear_button_id = "#".concat(shuffled_buttons[2].split("id='")[1].split("'>")[0])
        $(disappear_button_id).css('visibility', 'hidden');
      } else if (key == 76) {
        disappear_button_id = "#".concat(shuffled_buttons[1].split("id='")[1].split("'>")[0])
        $(disappear_button_id).css('visibility', 'hidden');
        disappear_button_id = "#".concat(shuffled_buttons[0].split("id='")[1].split("'>")[0])
        $(disappear_button_id).css('visibility', 'hidden');
      } else {
        disappear_button_id = "xyzid='xyz"  // ugly solution ;( don't know how to get element ids...
      }

      }
      setTimeout(function() {
        endTrial();
      }, trial.timing_feedback_duration);
    }

    function endTrial() {
      display_element.html("");
      point_counters =
        "<center><div class='alien_box'>" +
          point_counters +
        "</div></center>"
      if (!trial.show_stim_with_feedback) {
        point_counters = " ";
      }
      display_element.append(background, point_counters);
      jsPsych.finishTrial(trial_data);
    }

  };

  return plugin;
})();
