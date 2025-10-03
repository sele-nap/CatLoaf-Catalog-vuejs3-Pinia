import express from 'express';
import axios from 'axios';

const router = express.Router();

async function getRandomCatImage(): Promise<string> {
  try {
    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search');
    return data[0]?.url;
  } catch {
    return 'https://placekitten.com/300/300';
  }
}

async function getRandomFact(): Promise<string> {
  try {
    const { data } = await axios.get('https://catfact.ninja/fact');
    return data.fact;
  } catch {
    return 'Cats sleep on average 12 to 16 hours per day.';
  }
}

async function getRandomName(): Promise<string> {
  try {
    const { data } = await axios.get('https://random-data-api.com/api/name/random_name', { timeout: 4000 });
    if (data?.first_name) return data.first_name;
  } catch { }

  try {
    const { data } = await axios.get('https://randomuser.me/api/?nat=us,gb,ca,au,nz', { timeout: 4000 });
    const n = data?.results?.[0]?.name?.first;
    if (n) return n;
  } catch { }

  try {
    const { data } = await axios.get(
      'https://namey.muffinlabs.com/name.json?frequency=common&with_surname=false&amount=1',
      { timeout: 4000 }
    );
    if (Array.isArray(data) && data[0]) return data[0];
    if (typeof data === 'string') return data;
  } catch { }

  const names = [
    'Luna', 'Oliver', 'Milo', 'Nala', 'Simba', 'Cleo', 'Willow', 'Ziggy', 'Mocha', 'Pumpkin',
    'Peanut', 'Pepper', 'Hazel', 'Oreo', 'Poppy', 'Nova', 'Sunny', 'Maple', 'Rory', 'Skye',
    'Pickles', 'Pebble', 'Teddy', 'Indy', 'Blue', 'Sage', 'Bean', 'Echo', 'Finn', 'Kona',
    'Ash', 'Misty', 'Kiki', 'Jasper', 'Ivy', 'Cosmo', 'Comet', 'Dusty', 'Buttons', 'Gizmo'
  ];
  return names[Math.floor(Math.random() * names.length)];
}


router.get('/random', async (req, res) => {
  const [image_url, fact, name] = await Promise.all([
    getRandomCatImage(),
    getRandomFact(),
    getRandomName(),
  ]);
  res.json({ image_url, fact, name });
});

export default router;
