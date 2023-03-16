import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/getMovieInfo';
import BackLink from 'components/BackLink/BackLink';
import Movie from 'components/Movie/Movie';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovie(data))
      .catch(error => {
        setError(error);
        console.log(error);
      });

    return () => {
      setMovie();
    };
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref} state={{ from: location.state }}>
        GoBack
      </BackLink>
      {movie && (
        <Movie movie={movie} fromLocation={location.state} isError={error} />
      )}
    </main>
  );
}
