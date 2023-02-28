import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'components/api/api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { results } = await getMovieReviews(id);
        setReviews(results);
      } catch ({ response }) {
        console.log(response.data.message);
        Notiflix.Notify.failure(`${response.data.message}`, { timeout: 5000 });
      }
    };

    fetchCast();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>`{content}`</p>
    </li>
  ));

  return (
    <>
      {elements.length === 0 ? (
        <p>Sorry, we don't have any reviews for this movie</p>
      ) : (
        <ul> {elements}</ul>
      )}
    </>
  );
};

export default Reviews;
