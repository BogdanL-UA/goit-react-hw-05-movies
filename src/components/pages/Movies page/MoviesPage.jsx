import Notiflix from 'notiflix';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchMovie } from 'components/api/api';

import MoviesList from 'components/modules/Movies list/MoviesList';

import styles from './moviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchPosts = async () => {
      try {
        const { results } = await getSearchMovie(search);
        setMovies([...results]);
      } catch (error) {
        Notiflix.Notify.failure(`${error.message}`, { timeout: 5000 });
      }
    };

    fetchPosts();
  }, [search]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const { search } = e.currentTarget.elements;
      if (search.value.trim()) {
        setSearchParams({ search: search.value.toLowerCase() });
        e.currentTarget.reset();
      }
    },
    [setSearchParams]
  );

  return (
    <>
      <div className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            name="search"
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            required
          />
        </form>
      </div>

      <MoviesList items={movies} />
    </>
  );
};

export default MoviesPage;
