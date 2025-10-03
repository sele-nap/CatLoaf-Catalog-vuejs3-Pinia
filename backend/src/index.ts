import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import auth from './routes/auth.js';
import cats from './routes/cats.js';
import favorites from './routes/favorites.js';

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: false }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/auth', auth);
app.use('/cats', cats);
app.use('/favorites', favorites);

const port = Number(process.env.PORT || 5174);
app.listen(port, () => console.log(`API on http://localhost:${port}`));