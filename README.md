# Random Cats
> Learning how to use API composition in vue.js 3

A tiny full-stack app that composes multiple public APIs to show random cat cards (image + fact + name), lets users register/login, and save favorites.

## Tech Stack
- **Frontend:** Vue 3, TypeScript, Pinia, Vite, Axios
- **Backend:** Node.js, Express, JWT (HS256), SQLite (better-sqlite3)
- **APIs:** TheCatAPI (images), catfact.ninja (facts), random-data-api / randomuser.me / namey.muffinlabs (names)

## Features
- Flip cards with random image, fact, and name
- Auth: register, login, logout (JWT)
- Favorites (per user) stored in SQLite

## License
MIT
