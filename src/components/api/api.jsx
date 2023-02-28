import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '9c2333b586e6b509eeb062d943ee4684',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get(`/trending/movie/day`);
  return data;
};

export const getSearchMovie = async (query = '') => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });

  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
