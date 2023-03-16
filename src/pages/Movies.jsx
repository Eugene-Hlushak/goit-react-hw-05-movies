import { useSearchParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { searchMovies } from 'services/getMovies';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [searchQuery, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const request = searchParams.get('query') ?? '';

  const getMovieName = query => {
    setQuery(query);

    setSearchParams({ query });
  };

  useEffect(() => {
    if (!searchQuery) return;

    searchMovies(searchQuery).then(results => {
      setMovies([...results]);
    });
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery || !request) return;

    searchMovies(request).then(results => {
      setMovies([...results]);
    });
  }, [request, searchQuery]);

  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      <SearchForm movieName={getMovieName} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
