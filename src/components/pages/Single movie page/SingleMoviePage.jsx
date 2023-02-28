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
            className={styles.moviePoster}
            alt=""
            src={`https://image.tmdb.org/t/p/w400${movie?.poster_path}`}
          />
        ) : (
          `Movie poster image`
        )}
        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>{movie?.title}</h1>
          <p className={styles.movieInfoContent}>
            User Score: {(movie?.vote_average * 10).toFixed(2)}%
          </p>
          <h2 className={styles.movieTitle}>Overview</h2>
          <p className={styles.movieInfoContent}>{movie?.overview}</p>
          <h2 className={styles.movieTitle}>Genres</h2>
          <ul className={styles.movieGenres}>
            {movie?.genres !== undefined
              ? movie.genres.map(({ id, name }) => (
                  <li className={styles.movieInfoContent} key={id}>
                    {name}
                  </li>
                ))
              : `No genres`}
          </ul>
        </div>
      </div>
      <div>
        <h3 className={styles.movieTitle}>Additional information</h3>

        <ul className={styles.movieAdditionalInfoList}>
          <li className={styles.additionalInfoItem}>
            <Link
              className={styles.movieInfoContent}
              state={{ from }}
              to={`/movies/${id}/cast`}
            >
              Cast
            </Link>
          </li>
          <li className={styles.additionalInfoItem}>
            <Link
              className={styles.movieInfoContent}
              state={{ from }}
              to={`/movies/${id}/reviews`}
            >
              Reviews
            </Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </>
  );
};

export default SingleMoviePage;
