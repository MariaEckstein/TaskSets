
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

// IDs of non-practice aliens (["alien1", "alien2", "alien3", "alien4"])
alien_ids = shuffle([0, 1, 2, 3])

// DEFINITIONS
// Button names and order
var button_names = ["bed", "umbrella", "plant"]
var season_names = ["hot", "cold", "rainy"]

// Training task sets
TS_train = [
  {key_answer: button_names[0], sad_alien: 0, reward: 5},
  {key_answer: button_names[1], sad_alien: 1, reward: 5},
  {key_answer: button_names[2], sad_alien: 2, reward: 5},
  {key_answer: button_names[2], sad_alien: 3, reward: 5},
]

// Phase-1 task sets
TS0 = [  // sum: 25
  {key_answer: button_names[1], sad_alien: 0, reward: 6},
  {key_answer: button_names[2], sad_alien: 1, reward: 4},
  {key_answer: button_names[0], sad_alien: 2, reward: 5},
  {key_answer: button_names[0], sad_alien: 3, reward: 10}, //
]
TS1 = [  // sum: 20
  {key_answer: button_names[2], sad_alien: 0, reward: 2},
  {key_answer: button_names[1], sad_alien: 1, reward: 8},  //
  {key_answer: button_names[2], sad_alien: 2, reward: 7},  //
  {key_answer: button_names[1], sad_alien: 3, reward: 3},
]
TS2 = [  // sum: 15
  {key_answer: button_names[2], sad_alien: 0, reward: 7},  //
  {key_answer: button_names[0], sad_alien: 1, reward: 3},
  {key_answer: button_names[1], sad_alien: 2, reward: 3},
  {key_answer: button_names[0], sad_alien: 3, reward: 2},
]
TSs = [TS0, TS1, TS2]

if (short_version) {
  TS_train = [TS_train[0]]
  TSs = [
    [TS0[0]],
    [TS1[0]],
    [TS2[0]],
  ]
}

// ACTUALLY RANDOMIZE STUFF
sa_order = shuffle([0, 1, 2])
TS_rand = TS_rands[Math.floor(Math.random() * TS_rands.length)];
season_order = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_phase1b = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_refresher2 = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_refresher3 = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_phase4 = season_orders[Math.floor(Math.random() * season_orders.length)];
