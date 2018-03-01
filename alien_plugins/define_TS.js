
// Training task sets
TS_train = [
  {key_answer: item_names[0], sad_alien: 0, reward: 5},
  {key_answer: item_names[1], sad_alien: 1, reward: 5},
  {key_answer: item_names[2], sad_alien: 2, reward: 5},
  {key_answer: item_names[2], sad_alien: 3, reward: 5},
]

// Phase-1 task sets
TS0 = [  // sum: 25
  {key_answer: item_names[1], sad_alien: 0, reward: 6},
  {key_answer: item_names[2], sad_alien: 1, reward: 4},
  {key_answer: item_names[0], sad_alien: 2, reward: 5},
  {key_answer: item_names[0], sad_alien: 3, reward: 10}, // best alien in this TS
]
TS1 = [  // sum: 20
  {key_answer: item_names[2], sad_alien: 0, reward: 2},
  {key_answer: item_names[1], sad_alien: 1, reward: 8},  // best alien in this TS
  {key_answer: item_names[2], sad_alien: 2, reward: 7},  // best alien in this TS
  {key_answer: item_names[1], sad_alien: 3, reward: 3},
]
TS2 = [  // sum: 15
  {key_answer: item_names[2], sad_alien: 0, reward: 7},  // best alien in this TS
  {key_answer: item_names[0], sad_alien: 1, reward: 3},
  {key_answer: item_names[1], sad_alien: 2, reward: 3},
  {key_answer: item_names[0], sad_alien: 3, reward: 2},
]
TSs = [TS0, TS1, TS2]

// Short debug version
if (short_version) {
  TS_train = [TS_train[0]]
  TSs = [
    [TS0[0]],
    [TS1[0]],
    [TS2[0]],
  ]
}
//if (notify_season = false) {
  //  TSs = [].concat(TS0, TS1, TS2)
//}
 // notify_season = false
 //if (notify_season == false){
 //   TSs = [TS0, TS1, TS2]
//  }


