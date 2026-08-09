import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

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
CREATE UNIQUE INDEX IF NOT EXISTS favorites_unique
ON favorites(user_id, image_url);
`);

const email = 'test@example.com';
const password = 'password123';
const hash = bcrypt.hashSync(password, 10);

try {
  const stmt = db.prepare(
    'INSERT INTO users (email, password_hash) VALUES (?, ?)',
  );
  const info = stmt.run(email, hash);
  console.log('✅ Test user created successfully!');
  console.log(`   Email: ${email}`);
  console.log(`   Password: ${password}`);
  console.log(`   User ID: ${info.lastInsertRowid}`);
} catch (e: any) {
  if (e?.message?.includes('UNIQUE constraint failed')) {
    console.log('⚠️  User already exists');
  } else {
    console.error('❌ Error:', e.message);
  }
}

db.close();
