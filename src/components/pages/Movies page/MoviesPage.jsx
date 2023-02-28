import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchMovie } from 'components/api/api';

import MoviesList from 'components/modules/Movies list/MoviesList';

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
        console.log(error.message);
      }
    };

    fetchPosts();
  }, [search]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const { search } = e.currentTarget.elements;
      setSearchParams({ search: search.value.toLowerCase() });
      e.currentTarget.reset();
    },
    [setSearchParams]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
        <button type="submit">Search</button>
      </form>

      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesPage;
