# 🎬 Movie App

A movie discovery app built with React, Vite, and the TMDB API. This is a **practice project built for learning React** — hooks, context, routing, and working with a real external API.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## About

This project was built to practice core React concepts in a real, working app rather than isolated exercises. It's not a production product — it's a learning sandbox that touches:

- Functional components and the component tree
- `useState` and `useEffect` for state and side effects
- The Context API for global state (favorites), avoiding prop drilling
- Client-side routing with `react-router-dom`
- Talking to a real third-party REST API (TMDB) and handling loading/error states
- Persisting state to `localStorage`

## Features

- 🔍 **Search** movies by title, powered by TMDB's search endpoint
- 🎞️ **Browse popular movies** on load
- ❤️ **Save favorites**, persisted locally in the browser
- 💎 **Glassmorphism UI** with an animated aurora background
- 📱 **Fully responsive**, from mobile to desktop

## Tech Stack

| Layer      | Technology                                  |
|------------|----------------------------------------------|
| Framework  | React 18                                      |
| Build tool | Vite 5                                        |
| Routing    | React Router 6                                |
| Data       | [TMDB API](https://www.themoviedb.org/documentation/api) |
| Linting    | ESLint (React + Hooks rules)                  |
| Styling    | Plain CSS (custom, no framework)              |

## Project Structure

```
src/
├── App.jsx                  # Root component, sets up routes
├── main.jsx                 # Entry point
├── components/
│   ├── MovieCard.jsx        # Individual movie card
│   └── NavBar.jsx           # Top navigation
├── contexts/
│   └── MovieContext.jsx     # Global favorites state (Context API)
├── pages/
│   ├── Home.jsx             # Search + popular movies grid
│   └── Favorites.jsx        # Saved favorites grid
├── services/
│   └── api.js                # TMDB API calls
└── css/                      # Per-component stylesheets
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- A free [TMDB API key](https://www.themoviedb.org/settings/api)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd movie-search-engine

# Install dependencies
npm install
```

### Environment variables

Create a `.env` file in the project root (see `.env.example`):

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> Never commit your real `.env` file — it's already listed in `.gitignore`.

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other scripts

```bash
npm run build     # Production build
npm run preview   # Preview the production build locally
npm run lint       # Run ESLint
```

## What I Practiced Here

This project was deliberately kept small in scope so the focus could stay on fundamentals:

- Structuring a multi-page React app with clean component boundaries
- Managing shared state without prop drilling, using Context
- Handling async data fetching, loading states, and error states properly
- Keeping API keys out of source control with environment variables
- Writing responsive, from-scratch CSS (no UI framework)

## Known Limitations

- The TMDB API key is used directly from the client, which is fine for a learning project but **not safe for a real production app** — a backend proxy would be the correct next step to keep the key server-side.
- No automated tests yet.

## License

This project is for educational purposes and is provided as-is under the MIT License.