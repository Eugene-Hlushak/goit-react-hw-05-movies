import { getTrendingMovies } from 'services/getMovies';
import { useEffect, useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TrendingMoviesList from 'components/TrendingMovies/TrendingMoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(results => setMovies([...results]));
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>

      <TrendingMoviesList movies={movies} />
    </div>
  );
}
