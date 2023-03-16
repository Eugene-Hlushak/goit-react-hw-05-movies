import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getActors } from 'services/getMovieInfo';
import { imgURL } from 'services/getMovies';
import {
  CastList,
  ActorCard,
  ActorImg,
  ActorInfoThumb,
  ActorInfo,
  Character,
} from './Cast.styled';
import notFoundImg from '../../no-img.png';
const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors(`${movieId}`).then(cast => {
      setActors([...cast]);
      // eslint-disable-next-line
    });

    return () => {
      setActors([]);
    };
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      {actors.length > 0 ? (
        <CastList>
          {actors
            .filter(({ character }) => character)
            .map(({ original_name, cast_id, character, profile_path }) => (
              <ActorCard key={cast_id}>
                {profile_path ? (
                  <ActorImg
                    src={`${imgURL}${profile_path}`}
                    alt={original_name}
                  />
                ) : (
                  <ActorImg src={notFoundImg} alt={original_name} />
                )}
                <ActorInfoThumb>
                  <ActorInfo>
                    {original_name} as
                    <Character> {character}</Character>
                  </ActorInfo>
                </ActorInfoThumb>
              </ActorCard>
            ))}
        </CastList>
      ) : (
        <p>Sorry, there is no info about actors.</p>
      )}
    </>
  );
};

export default Cast;
