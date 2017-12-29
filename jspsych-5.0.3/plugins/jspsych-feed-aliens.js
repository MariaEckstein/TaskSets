
jsPsych.plugins["feed-aliens"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('animation', 'stimulus', 'image');

  plugin.trial = function(display_element, trial) {

    // default parameters
    trial.show_stim_with_feedback = (typeof trial.show_stim_with_feedback === 'undefined') ? true : trial.show_stim_with_feedback;
    trial.show_feedback_on_timeout = (typeof trial.show_feedback_on_timeout === 'undefined') ? false : trial.show_feedback_on_timeout;
    trial.timeout_message = trial.timeout_message || "<p>Please respond faster.</p>";
    trial.hide_alien_counter = (typeof trial.hide_alien_counter === 'undefined') ? true : trial.hide_alien_counter;
    trial.shuffle_buttons = (typeof trial.shuffle_buttons === 'undefined') ? false : trial.shuffle_buttons;  // default: don't shuffle buttons
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
    l_item_name = item_names[item_order[0]]
    m_item_name = item_names[item_order[1]]
    r_item_name = item_names[item_order[2]]
    l_item_html = item_buttons[item_order[0]]
    m_item_html = item_buttons[item_order[1]]
    r_item_html = item_buttons[item_order[2]]

    response_buttons =
      "<center><div class='response_buttons' id='response_buttons'>" +
        l_item_html + m_item_html + r_item_html +
      "</div></center>"

    alien_buttons =
      "<center><div class='alien_box' id='everything'>" +
        sad_alien +
        response_buttons +
      "</div></center>"

    // display everyting
    display_element.html("");
    display_element.append(background, alien_buttons);

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
        chosen_item_name = l_item_name
        unchosen_item1 = m_item_name
        unchosen_item2 = r_item_name
      } else if (key == middle_key) {
        chosen_item_name = m_item_name
        unchosen_item1 = l_item_name
        unchosen_item2 = r_item_name
      } else if (key == right_key) {
        chosen_item_name = r_item_name
        unchosen_item1 = l_item_name
        unchosen_item2 = m_item_name
      } else {
        chosen_item_name = NaN
      }

      var correct = false;
      if (trial.key_answer == chosen_item_name) {
        correct = true;
      }

      // get feedback amount
      if (!correct) {  // incorrect response or no answer
        feedback_amount = 0
      } else {  // correct response
        for (i = 0; i < item_names.length; i++) {
          if (chosen_item_name == item_names[i]) {
            noised_amount = trial.reward + 0.5 * randn_bm()
            rounded_amount = Math.round(noised_amount * 10) / 10  // round doesn't round with decimals
            feedback_amount = Math.max(0, rounded_amount)
          }
        }
      }

      // save data
      trial_data = {
        "rt": info.rt,
        "key": info.key,
        "correct": correct,
        "item_left": l_item_name,
        "item_center": m_item_name,
        "item_right": r_item_name,
        "item_chosen": chosen_item_name,
        "reward": feedback_amount,
        "sad_alien": trial.aliens[trial.sad_alien],  //trial.aliens: alien_names_rand ((fixed! used to be just trial.sad_alien))
        "season": trial.season,
        "TS": TS_rand[season2number[trial.season]],
        "phase": trial.phase,
      };
      console.log(chosen_item_name);

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

      // add reward measuringtape
      ruler_length = 20 + 50 * feedback_amount;
      ruler =
        "<div>" +
          "<img class='ruler' src='img/measuringtape.png' style= 'clip: rect(0px, " + ruler_length + "px, 200px, 0px);'>" +
        "</div>"

      if (trial.season == "rainbow") {  // no feedback in rainbow season!
        ruler = ""
      }

      alien_buttons =
        "<center><div class='alien_box'>" +
          sad_alien +
          ruler +
          response_buttons +
        "</div></center>"

      display_element.append(background, alien_buttons);

      // remove non-clicked buttons
      $("#" + unchosen_item1 + "-button").css('visibility', 'hidden');
      $("#" + unchosen_item2 + "-button").css('visibility', 'hidden');

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
