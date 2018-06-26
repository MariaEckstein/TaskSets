instructions =
  "<img class=background src='img/hot_cloudy.png'>" +
  "<center><p>Suddenly, a massive layer of clouds appears. " +
  "The clouds are so thick that you are unable to recognize anything around you, " +
  "not even what season it is currently (hot, cold, or rainy).</p>" +
  "<p>Your alien friends quickly assure you that this is a common phenomenon, and not dangerous. " +
  "They tell you: '<i>Just keep doing what you are doing, the clouds will go away eventually!</i>'</p>" +
  "<p>So try your best to help the aliens grow as much as you can, without seeing the current season!</p>" +
  "<p><i>Hint: You will still be notified when seasons change!</i></p></center>"

var phase2_instructions = {
    on_trial_start: function(){
        document.dispatchEvent(startInstructions);
        console.log(startInstructions)
    },
  type: 'instructions',
  pages: [instructions],
  show_clickable_nav: true,
  timing_post_trial: 200,
    on_finish: function(){
        document.dispatchEvent(endInstructions);
        console.log(endInstructions)
    }
};

instructions =
  "<center><p>As suddenly as it came, the cloud cover lifts and the sky is visible again!</p>" +
  "<p>To celebrate, the aliens start to organize a special holiday! " +
  "There will be an extraordinary and amusing competition, " +
  "and they invited <i>you</i> to be part of it!</p>" +
  "<p>The competition will take place very soon! " +
  "<i>Make sure to get your aliens up to speed for it, by helping them grow as much as you can!</i></p>"

var phase2_instructions_post = {
    on_trial_start: function(){
        document.dispatchEvent(startInstructions)
    },
  type: 'instructions',
  pages: [instructions],
  show_clickable_nav: true,
  timing_post_trial: 200,
    on_finish: function(){
        document.dispatchEvent(endInstructions)
    }
};

