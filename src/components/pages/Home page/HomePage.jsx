import { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { getTrendingMovies } from 'components/api/api';

import MoviesList from 'components/modules/Movies list/MoviesList';
import styles from './homePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setMovies([...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      <MoviesList items={movies} />

      {loading && (
        <ColorRing
          height="100"
          width="100"
          radius="10"
          color="green"
          ariaLabel="loading"
        />
      )}

      {error && <p>Sorry something's gone wrong. Try again soon.</p>}
    </>
  );
};

export default HomePage;
