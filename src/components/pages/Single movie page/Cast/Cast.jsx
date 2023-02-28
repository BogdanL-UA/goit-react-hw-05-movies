import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'components/api/api';

import styles from './cast.module.css'

const Cast = () => {
  const { id } = useParams();
  const [castMovie, setCastMovie] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await getMovieCast(id);
        setCastMovie(cast);
      } catch ({ response }) {
        console.log(response.data.message);
        Notiflix.Notify.failure(`${response.data.message}`, { timeout: 5000 });
      }
    };

    fetchCast();
  }, [id]);

  const elements = castMovie.map(({ id, name, profile_path, character }) => (
    <li key={id}>
      {profile_path !== null ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt="poster"
          width="200"
        />
      ) : (
        `No image`
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));

  return (
    <>
      {elements.length > 0 ? (
        <ul className={styles.castList}>{elements}</ul>
      ) : (
        <p>Sorry, we don't have any cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
