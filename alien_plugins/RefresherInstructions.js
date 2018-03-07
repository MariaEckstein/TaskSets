
// Instruction slides
phase3_text =
  "<center><p>Great job making all these choices! You are now ready to enter the competition.</p>" +
  "<p><i>Let each of your aliens grow as much as possible to win the competition!</i> " +
  "Everything works the same as when you were taking care of aliens before.</p>" +
  "<p>Note: You will only see your own score during the competition and not your opponent's score.</p>" +
  "<p>Now do your best and good luck!</p>" +
  "<p>Press 'Next' when you are ready.</p></center>"

var phase3_post = {
  type: 'instructions',
  pages: [phase3_text],
  show_clickable_nav: true,
  timing_post_trial: 200
}

// Goodbye block
var goodbye = {
  type: 'instructions',
  pages: ["<center><p>Thank you for participating in this experiment!</p>" +
    "<p>Please click 'Next' and let the experimenter know that you are done!</p></center>"],
  show_clickable_nav: true
}
