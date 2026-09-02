const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchPages = async (buildUrl, pages) => {
  const responses = await Promise.all(
      pages.map((page) => fetch(buildUrl(page)))
  );

  for (const response of responses) {
    if (!response.ok) {
      throw new Error(`TMDB API error: ${response.status}`);
    }
  }

  const datasets = await Promise.all(responses.map((r) => r.json()));
  return datasets.flatMap((data) => data.results ?? []);
};

export const getPopularMovies = async () => {
  const results = await fetchPages(
      (page) => `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
      [1, 2, 3]
  );
  return results.slice(0, 50);
};

export const searchMovies = async (query) => {
  const results = await fetchPages(
      (page) =>
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
              query
          )}&page=${page}`,
      [1, 2, 3]
  );
  return results.slice(0, 50);
};