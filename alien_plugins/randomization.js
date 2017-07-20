
// RANDOMIZATIONS
// Orders of seasons
season_orders = [
  [[0, 1, 2], [1, 2, 0], [2, 0, 1], [0, 2, 1]],
  [[1, 2, 0], [2, 0, 1], [0, 1, 2], [1, 0, 2]],
  [[2, 0, 1], [0, 1, 2], [1, 2, 0], [2, 1, 0]],
]

// Assignments of TS to seasons (0: hot; 1: cold; 2: rainy)
TS_rands = [
  [0, 1, 2],
  [1, 2, 0],
  [2, 0, 1]
]

// IDs of non-practice aliens (["alien1", "alien2", "alien4"])
alien_ids = shuffle([0, 1, 2])

// DEFINITIONS
// Button names and order
var button_names = ["bed", "umbrella", "plant"]
if (input_device == "mouse") {
  key_answers = button_names
} else if (input_device == "keyboard") {
  key_answers = [74, 75, 76]
}
var seasons = ["hot", "cold", "rainy"]
var aliens = ["alien1", "alien2", "alien4"]

// Define maximum rewards for each season and alien
training_rewards = [6, 6, 6]
season_rewards_ordered = [
  [2, 4, 7],
  [6, 9, 3],
  [10, 5, 8]
]

// Determine order of rewards, independent of which seasons appear when
reward_orders = [  // everything except [0,1,2] and [2,1,0]
  [0, 2, 1],
  // [1, 0, 2],  // only need 3
  [1, 2, 0],
  [2, 0, 1]
]

// Training task sets
TS_train = [
  {key_answer: key_answers[0], sad_alien: 0},
  {key_answer: key_answers[1], sad_alien: 1},
  {key_answer: key_answers[2], sad_alien: 2},
  {key_answer: key_answers[0], sad_alien: 0},
  {key_answer: key_answers[1], sad_alien: 1},
  {key_answer: key_answers[2], sad_alien: 2},
]

// Phase-1 task sets
TS1 = [
  {key_answer: key_answers[0], sad_alien: 2},
  {key_answer: key_answers[1], sad_alien: 1},
  {key_answer: key_answers[2], sad_alien: 0},
  {key_answer: key_answers[0], sad_alien: 2},
  {key_answer: key_answers[1], sad_alien: 1},
  {key_answer: key_answers[2], sad_alien: 0},
]
TS2 = [
  {key_answer: key_answers[0], sad_alien: 1},
  {key_answer: key_answers[1], sad_alien: 0},
  {key_answer: key_answers[2], sad_alien: 2},
  {key_answer: key_answers[0], sad_alien: 1},
  {key_answer: key_answers[1], sad_alien: 0},
  {key_answer: key_answers[2], sad_alien: 2},
]
TS3 = [
  {key_answer: key_answers[0], sad_alien: 0},
  {key_answer: key_answers[1], sad_alien: 2},
  {key_answer: key_answers[2], sad_alien: 1},
  {key_answer: key_answers[0], sad_alien: 0},
  {key_answer: key_answers[1], sad_alien: 2},
  {key_answer: key_answers[2], sad_alien: 1},
]
TSs = [TS1, TS2, TS3]

if (short_version) {
  TS_train = [TS_train[0]]
  TSs = [
    [TS1[0]],
    [TS2[2]],
    [TS3[1]],
  ]
}

// SHUFFLING FUNCTION
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

// ACTUALLY RANDOMIZE STUFF
sa_order = shuffle([0, 1, 2])
TS_rand = TS_rands[Math.floor(Math.random() * TS_rands.length)];
season_order = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_phase3 = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_phase4 = season_orders[Math.floor(Math.random() * season_orders.length)];
reward_order = reward_orders[Math.floor(Math.random() * reward_orders.length)]
season_rewards = [
  season_rewards_ordered[reward_order[0]],
  season_rewards_ordered[reward_order[1]],
  season_rewards_ordered[reward_order[2]]
]
