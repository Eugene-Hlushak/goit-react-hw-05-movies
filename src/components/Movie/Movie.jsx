import { PropTypes } from 'prop-types';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import putImg from 'services/putImg';
import {
  Img,
  MovieContainer,
  MovieTitle,
  MovieInfotThumb,
  MovieInfo,
  MovieInfoContent,
} from './Movie.styled';

const Movie = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
  fromLocation,
}) => {
  return (
    <>
      <MovieContainer>
        {poster_path && <Img src={putImg(poster_path)} alt="" />}

        <MovieInfotThumb>
          <MovieTitle>
            {`${title} `} {release_date && `(${release_date.slice(0, 4)})`}
          </MovieTitle>
          <MovieInfoContent>{`User score: ${Math.ceil(
            vote_average * 10
          )}%`}</MovieInfoContent>
          <MovieInfo>Overview</MovieInfo>
          <MovieInfoContent>{overview}</MovieInfoContent>
          <MovieInfo>Genres</MovieInfo>
          {genres && (
            <MovieInfoContent>
              {genres.map(({ name }) => name).join(' ')}
            </MovieInfoContent>
          )}
        </MovieInfotThumb>
      </MovieContainer>
      <AdditionalInfo fromLocation={fromLocation} />
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.number,
  }).isRequired,
  fromLocation: PropTypes.shape({}).isRequired,
};

export default Movie;
