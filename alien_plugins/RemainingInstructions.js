
// Instruction slides
phase3_text =
  "<center><p>Great job making all these choices! You are now ready to enter the competition.</p>" +
  "<p><i>Let each of your aliens grow as much as possible to win the competition!</i> " +
  "Everything works the same as when you were taking care of aliens before.</p>" +
  "<p>Note: You will only see your own score during the competition and not your opponent's score.</p>" +
  "<p>Now do your best and good luck!</p>" +
  "<p>Press 'Next' when you are ready.</p></center>"

var phase3_post = {
    on_trial_start: function(){
        document.dispatchEvent(startInstructions);
        document.dispatchEvent(endEvent)
    },
  type: 'instructions',
  pages: [phase3_text],
  show_clickable_nav: true,
    on_finish: function(){
        document.dispatchEvent(startEvent);
        document.dispatchEvent(endInstructions)
    }
};

var phase6_mixed_instructions = {
    on_trial_start: function(){
        document.dispatchEvent(startInstructions);
        document.dispatchEvent(endEvent)
    },
  type: 'instructions',
  pages: [
    "<center><p>You will next encounter the <i>chaotic season</i>.</p>"+
    "<p>In the chaotic season, the weather changes very quickly. "+
    "It can be rainy one day, and then then sunny the next.</p></center>"
  ],
  show_clickable_nav: true,
    on_finish: function(){
        document.dispatchEvent(startEvent);
        document.dispatchEvent(endInstructions)
    }
}

// Goodbye block
var goodbye = {
  type: 'instructions',
  pages: [
    "<center><p>Thank you for participating in this experiment!</p>" +
    "<p>Please click 'Next' and let the experimenter know that you are done!</p></center>"
  ],
  show_clickable_nav: true,
  //timing_post_trial: ITI_duration,
}
