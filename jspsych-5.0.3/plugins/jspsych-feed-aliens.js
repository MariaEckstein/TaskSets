
jsPsych.plugins["feed-aliens"] = (function() {

  /*
  DOCUMENTATION

  feed-aliens displays a single trial in the initial-learning phase of the Aliens task.
  In a trial, participants see an alien together with three items, situated
  in one specific season. The goal is to select the item that leads to the
  largest reward in terms of the length of a measuring tape displayed after the
  choice.

  feed-aliens requires the following variables:
  season: a name in ["hot", "cold", "rainy", "hot_cloudy", "cold_cloudy", ...]
    Used to load the background picture and added to the trial data
  sad_alien: a number in [0, 1, 2] specifying which alien is shown
    Used to load the image of the current alien with trial.aliens[trial.sad_alien];
    also added to trial data
  aliens: an array of alien names (e.g., alien_names).
    Used to load the image of the current alien with trial.aliens[trial.sad_alien];
    also added to trial data
  key_answer: indicates the correct response (one in item_names)
    Its only use: if (trial.key_answer == chosen_item_name) {correct = true}
  reward: a number (e.g., between 2-10)
    Its only use is to calculate the trial reward, by adding noise
  TS: an element in [0, 1, 2, "train", "rainbow"], naming the TS
    Its only use: saved in the trial data
  phase: a name (e.g., "1Mixed")
    Its only use: saved in the trial data

  in addition to standard jsPsych variables:
  choices: specifies allowed buttons (e.g., [left_key, middle_key, right_key])
    Its only use: valid_responses: trial.choices
  timing_response: indicates participants' max response time (e.g., max_RT)
  timing_feedback_duration: feedback_duration
  timing_post_trial: ITI_duration
  timeout_message: timeout_message

  feed-aliens was created by maria.eckstein@berkeley.edu, based on code
  from Josh de Leuw's awesome jsPsych library.
  */

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

    //console.log(trial.isi);
    //console.log(trial.timing_post_trial);
    //console.log(trial.timing_feedback_duration);
    //console.log(trial.season);

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
    l_item_name = item_names[0]
    m_item_name = item_names[1]
    r_item_name = item_names[2]
    l_item_html = item_buttons[0]
    m_item_html = item_buttons[1]
    r_item_html = item_buttons[2]

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

    //***********STIMULI TRIGGER************
     var variable = String(trial.season).concat(String(trial.phase), String(trial.aliens[trial.sad_alien]));
      console.log(variable);
      console.log(window[variable]);
      document.dispatchEvent(window[variable]);




    var trial_data = {};

    // create response function
    var after_response = function(info) {
      //***************RESPONSE TRIGGER??????****************
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

      var key = info.key;
      chosen_item_name = NaN;
      chosen_item_id = NaN;
      if (key == left_key) {
        chosen_item_name = l_item_name;
        chosen_item_id = 0;
        unchosen_item1 = m_item_name;
        unchosen_item2 = r_item_name;
      } else if (key == middle_key) {
        chosen_item_name = m_item_name;
        chosen_item_id = 1;
        unchosen_item1 = l_item_name;
        unchosen_item2 = r_item_name
      } else if (key == right_key) {
        chosen_item_name = r_item_name;
        chosen_item_id = 2;
        unchosen_item1 = l_item_name;
        unchosen_item2 = m_item_name
      } else {
        chosen_item_name = NaN;
          unchosen_item1 = NaN;
          unchosen_item2 = NaN
      }

      var correct = false;
      if (trial.key_answer == chosen_item_name) {
        correct = true;
      }

      // get feedback amount
      if (!correct) {  // incorrect response
        reward = 1
      } else {  // correct response
        reward = trial.reward
      }
      noised_amount = reward + 0.5 * randn_bm();
      rounded_amount = Math.round(noised_amount * 10) / 10; // round doesn't round with decimals
      feedback_amount = Math.max(0, rounded_amount);

      // save data
      trial_data = {
        "rt": info.rt,
        "key": info.key,
        "correct": correct,
        "reward": feedback_amount,
        "item_chosen": chosen_item_id,
        "item_chosen_name": chosen_item_name,
        "sad_alien": trial.sad_alien,
        "sad_alien_name": trial.aliens[trial.sad_alien],
        "TS": trial.TS,
        "block-type": trial.block_type,
        "season": trial.season,
        "phase": trial.phase,
          "ISI": trial.isi,
        "ITI": trial.timing_post_trial,
      };

      display_element.html('');  // clears display before feedback screen

        alien_buttons =                                       //beginning of added
            "<center><div class='alien_box'>" +
            sad_alien +
            response_buttons +
            "</div></center>"

        display_element.append(background, alien_buttons);

        // remove non-clicked buttons
        $("#" + unchosen_item1 + "-button").css('visibility', 'hidden');
        $("#" + unchosen_item2 + "-button").css('visibility', 'hidden');       //end of added


      var timeout = info.rt == -1;

      //*************ITI TRIGGER********************
      //console.log(startITI);
      setTimeout(function() {
          doFeedback(key, correct, timeout);
      }, trial.isi);   //creates a delay
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
          display_element.html('');
        display_element.append(trial.timeout_message);
        //**********TIMEOUT TRIGGER*******
          document.dispatchEvent(missedTrial);
          console.log(missedTrial);
        trial.timing_feedback_duration = 4 * trial.timing_feedback_duration;  // message stays on longer if there was no button press
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

      display_element.html('');

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
        var feedback = 'feedback'.concat(String(correct));
        console.log(window[feedback]);
        document.dispatchEvent(window[feedback]);

      setTimeout(function() {
        endTrial();
      }, trial.timing_feedback_duration);
    }

    function endTrial() {
      display_element.html("");
      display_element.append(background);
      jsPsych.finishTrial(trial_data);
      document.dispatchEvent(startITI);
      console.log(startITI)
    }

  };

  return plugin;
})();
