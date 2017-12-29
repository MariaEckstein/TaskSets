
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

// Convert name of the season into the corresponding number
var season2number = {
  "hot": 0,
  "hot_cloudy": 0,
  "cold": 1,
  "cold_cloudy": 1,
  "rainy": 2,
  "rainy_cloudy": 2
}
