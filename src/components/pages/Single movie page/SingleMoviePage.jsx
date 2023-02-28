import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { getMovieById } from 'components/api/api';
import { useCallback } from 'react';

import styles from './singleMoviePage.module.css';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch ({ response }) {
        console.log(response.data.message);
        Notiflix.Notify.failure(`${response.data.message}`, { timeout: 5000 });
      }
    };

    fetchMovie();
  }, [id]);

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  return (
    <>
      <button onClick={goBack} type="button" className={styles.button}>
        Go back
      </button>
      <div className={styles.movieWrapper}>
        {movie?.poster_path !== undefined ? (
          <img
            alt=""
            src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
          />
        ) : (
          `Movie poster image`
        )}
        <div className={styles.movieInfo}>
          <h1>{movie?.title}</h1>
          <p>User Score: {(movie?.vote_average * 10).toFixed(2)}%</p>
          <h2>Overview</h2>
          <p>{movie?.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie?.genres !== undefined
              ? movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)
              : `No genres`}
          </ul>
          <p>Additional information</p>

          <ul>
            <li>
              <Link state={{ from }} to={`/movies/${id}/cast`}>
                Cast
              </Link>
            </li>
            <li>
              <Link state={{ from }} to={`/movies/${id}/reviews`}>
                Reviews
              </Link>
            </li>
            <Outlet />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleMoviePage;
