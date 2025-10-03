import { Router } from 'express';
import axios from 'axios';

const router = Router();

async function getRandomImage(): Promise<string> {
  const headers: Record<string, string> = {};
  if (process.env.CAT_API_KEY) headers['x-api-key'] = process.env.CAT_API_KEY;
  const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', { headers });
  return data?.[0]?.url || 'https://cataas.com/cat';
}

async function getRandomFact(): Promise<string> {
  const { data } = await axios.get('https://catfact.ninja/fact');
  return data?.fact || 'Les chats dorment en moyenne 12 à 16 heures par jour.';
}

async function getRandomName(): Promise<string> {
  try {
    const { data } = await axios.get('https://random-data-api.com/api/name/random_name');
    return data?.first_name || 'Minou';
  } catch {
    const names = ['Minou', 'Luna', 'Milo', 'Nala', 'Simba', 'Chai', 'Moka', 'Pixel'];
    return names[Math.floor(Math.random() * names.length)];
  }
}

router.get('/random', async (_req, res) => {
  try {
    const [image_url, fact, name] = await Promise.all([
      getRandomImage(),
      getRandomFact(),
      getRandomName()
    ]);
    res.json({ image_url, fact, name });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch cat data' });
  }
});

export default router;