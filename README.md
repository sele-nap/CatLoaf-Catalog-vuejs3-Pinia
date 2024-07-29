# CatLoaf Catalog

## Description

CatLoaf Catalog is a simple Vue.js application that fetches cat images from the Cat API and allows users to search for cats by name. It demonstrates the usage of Vue 3 Composition API with Pinia for state management.

## Features

- Fetches cat images from the Cat API.
- Displays a list of cats with their names.
- Allows searching cats by name.
- Shows loading indicator and error message handling.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd cat-loaf-catalog
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm run dev
   ```

   The application will be served at `http://localhost:3000`.

## Technologies Used

- Vue.js 3: Front-end framework
- Composition API: Reactive and composable API for Vue 3
- Pinia: State management for Vue 3 applications
- Cat API: External API for fetching cat images

## Getting Started

1. **Fetching Cats:**
   
   The application fetches cat images from the [Cat API](https://thecatapi.com/).

2. **Searching Cats:**
   
   Users can search for cats by name using the search input field. The list of cats dynamically updates based on the search term.
