import axios from 'axios';
export const KEY = '008f0f784afae380e7e38ed25ea842e9';
export const imgURL = 'https://image.tmdb.org/t/p/w300/';
export async function getTrendingMovies() {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`
  );

  return results;
}

export async function searchMovies(query) {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
  );

  return results;
}
