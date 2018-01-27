
// Draw random number from a Gaussian distribution
function randn_bm() {
    var u = 1 - Math.random();  // Subtraction to flip [0, 1) to (0, 1].
    var v = 1 - Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

// Shuffle array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Randomize season order
function create_pseudo_random_array(available_elements, target_length) {
  array = shuffle(available_elements)
  while (array.length < target_length) {
    new_block = shuffle(available_elements)
    if (new_block[0] != array[array.length-1]) {
      array = array.concat(new_block)
    }
  }
  return array
}

// Create season timelines for feed aliens
function create_feed_aliens_timeline(TS_order, n_blocks, n_trials, special) {
  seasons_in_order = []

  for (block = 0; block < season_names.length * n_blocks; block ++) {  // iterate through TS_order, which indicates in which block each season should be presented
    TS = TS_order[block]  // 0, 1, or 2
    season_name = season_names[TS]

    if (special == "cloudy") {
      season_name = season_name.concat("_cloudy")
    }

    start_new_season = {
      type: "start_new_season",
      show_clickable_nav: true,
      pages: [
        "<img class='background' src='img/" + season_name + ".png'>" +
        "<p class='start_new_season'><i>The season has changed!</i></p>"
      ]
    }
    // trials = [start_new_season];
    trials = [];

    for (tr = 0; tr < n_trials; tr ++) {
      trial = {
        TS: TS,
        season: season_name,
        timeline: TSs[TS],
        randomize_order: true
      }
      trials.push(trial);
    }

    seasons_in_order = seasons_in_order.concat(trials)
  }
  return seasons_in_order
}

// Convert name of the season into the corresponding number
// var season2number = {
//   "hot": 0,
//   "hot_cloudy": 0,
//   "cold": 1,
//   "cold_cloudy": 1,
//   "rainy": 2,
//   "rainy_cloudy": 2
// }
