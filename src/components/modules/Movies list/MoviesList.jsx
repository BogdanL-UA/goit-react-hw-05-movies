import PropTypes from 'prop-types';

import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './moviesList.module.css';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id} className={styles.moviesListItem}>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
        key={id}
      >
        <p>{title}</p>
      </Link>
    </li>
  ));

  return <ul className={styles.moviesList}>{elements}</ul>;
};

export default memo(MoviesList);

MoviesList.defaultProps = {
  items: [],
};

MoviesList.propTypes = {
  items: PropTypes.array.isRequired,
};
