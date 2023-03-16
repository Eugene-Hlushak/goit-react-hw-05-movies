import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieReviews } from 'services/getMovieInfo';
import { ReviewItem, ReviewAuthor } from './Reviews.styled';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(results => setReviews([...results]));

    return () => {
      setReviews([]);
    };
  }, [movieId]);

  return (
    <>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <ReviewItem key={id}>
                <ReviewAuthor>{author}</ReviewAuthor>
                <p>{content}</p>
              </ReviewItem>
            );
          })}
        </ul>
      ) : (
        <p>Sorry, there are no reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
