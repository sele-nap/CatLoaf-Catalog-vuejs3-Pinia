import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import db from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = Router();
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: { error: 'Too many attempts, try again later' },
});
router.use(authLimiter);
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ error: 'email & password required' });
    if (!isValidEmail(email))
        return res.status(400).json({ error: 'Invalid email format' });
    if (password.length < 8)
        return res.status(400).json({ error: 'Password must be at least 8 characters' });
    if (!process.env.JWT_SECRET)
        return res.status(500).json({ error: 'Missing JWT_SECRET' });
    const hash = await bcrypt.hash(password, 10);
    try {
        const stmt = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
        const info = stmt.run(email, hash);
        const token = jwt.sign({ userId: info.lastInsertRowid }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    }
    catch (e) {
        const code = e?.code || '';
        const msg = e?.message || '';
        if (code === 'SQLITE_CONSTRAINT' || code === 'SQLITE_CONSTRAINT_UNIQUE' || msg.includes('UNIQUE constraint failed')) {
            return res.status(409).json({ error: 'Email already exists' });
        }
        console.error('Register error:', e);
        return res.status(500).json({ error: 'Server error' });
    }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ error: 'email & password required' });
    if (!process.env.JWT_SECRET)
        return res.status(500).json({ error: 'Missing JWT_SECRET' });
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user)
        return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok)
        return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
});
export default router;
