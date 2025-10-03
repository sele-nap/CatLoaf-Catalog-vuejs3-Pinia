import Database from 'better-sqlite3';

const db = new Database('cats.db');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS favorites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  image_url TEXT NOT NULL,
  fact TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
`);

db.exec(`
-- keep only one row per (user_id, image_url)
DELETE FROM favorites
WHERE rowid NOT IN (
  SELECT MIN(rowid)
  FROM favorites
  GROUP BY user_id, image_url
);

-- unique constraint to block future duplicates
CREATE UNIQUE INDEX IF NOT EXISTS favorites_unique
ON favorites(user_id, image_url);
`);

export default db;
