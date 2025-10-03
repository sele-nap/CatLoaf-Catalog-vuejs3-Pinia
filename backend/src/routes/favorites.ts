import { Router } from 'express';
import db from '../db.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/', requireAuth, (req, res) => {
  const userId = (req as any).userId as number;
  const rows = db.prepare('SELECT id, image_url, fact, name, created_at FROM favorites WHERE user_id = ? ORDER BY created_at DESC').all(userId);
  res.json({ items: rows });
});

router.post('/', requireAuth, (req, res) => {
  const userId = (req as any).userId as number;
  const { image_url, fact, name } = req.body as { image_url: string; fact: string; name: string };
  if (!image_url || !fact || !name) return res.status(400).json({ error: 'image_url, fact, name required' });
  try {
    const info = db.prepare('INSERT INTO favorites (user_id, image_url, fact, name) VALUES (?, ?, ?, ?)').run(userId, image_url, fact, name);
    res.json({ id: info.lastInsertRowid });
  } catch (e: any) {
    const code = e?.code || '';
    const msg = e?.message || '';
    if (code === 'SQLITE_CONSTRAINT' || code === 'SQLITE_CONSTRAINT_UNIQUE' || msg.includes('UNIQUE constraint failed')) {
      return res.status(409).json({ error: 'Already favorited' });
    }
    return res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', requireAuth, (req, res) => {
  const userId = (req as any).userId as number;
  const id = Number(req.params.id);
  const info = db.prepare('DELETE FROM favorites WHERE id = ? AND user_id = ?').run(id, userId);
  if (info.changes === 0) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
});

export default router;