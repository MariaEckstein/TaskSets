
// Season and item order
item_order = shuffle([0, 1, 2])
season_orders = [  // 0=hot; 1=cold; 3=rainy
  [0, 1, 2, 1, 2, 0, 2, 0, 1, 0, 2, 1],
  [1, 2, 0, 2, 0, 1, 0, 1, 2, 1, 0, 2],
  [2, 0, 1, 0, 1, 2, 1, 2, 0, 2, 1, 0],
]
season_order = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_cloudy = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_refresher2 = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_refresher3 = season_orders[Math.floor(Math.random() * season_orders.length)];
season_order_phase4 = season_orders[Math.floor(Math.random() * season_orders.length)];

// Alien names and order
alien_names = ["alien1", "alien2", "alien3", "alien4"]
alien_ids = shuffle([0, 1, 2, 3])
alien_names_rand = [
  alien_names[alien_ids[0]],
  alien_names[alien_ids[1]],
  alien_names[alien_ids[2]],
  alien_names[alien_ids[3]]
]
pr_alien_names = ["alien5", "alien6", "alien7", "alien9"]
pr_alien_names = shuffle(pr_alien_names)

// Assignments of TS to seasons
TS_rand = shuffle([0, 1, 2]);  // e.g., if TS_rand = [2, 0, 1], then hot has TS2, cold TS0, and rainy TS1
