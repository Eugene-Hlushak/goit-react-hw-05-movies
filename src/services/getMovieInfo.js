import axios from 'axios';
import { KEY } from './getMovies';

export async function getMovieById(movieId) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`
  );

  return data;
}

export async function getMovieReviews(movieId) {
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );

  return results;
}

export async function getActors(movieId) {
  const {
    data: { cast },
  } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
  );

  return cast;
}
