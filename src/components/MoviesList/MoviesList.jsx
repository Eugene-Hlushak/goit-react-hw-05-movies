import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import putImg from 'services/putImg';
import {
  MovieList,
  MovieListItem,
  MovieTitle,
  MovieThumb,
  Img,
} from './MoviesList.styled';

import noPoster from '../../sorry-image-not-available.jpg';
const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ id, poster_path, title, name, release_date }) => (
        <MovieListItem key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {poster_path ? (
              <Img src={putImg(poster_path)} alt="" width={240} height={320} />
            ) : (
              <Img
                src={noPoster}
                alt="sorry, no poster"
                width={240}
                height={320}
              />
            )}
            <MovieThumb>
              <MovieTitle>
                {title || name} (
                {release_date ? release_date.slice(0, 4) : 'Soon'})
              </MovieTitle>
            </MovieThumb>
          </Link>
        </MovieListItem>
      ))}
    </MovieList>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
