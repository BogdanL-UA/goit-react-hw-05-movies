import { NavLink } from 'react-router-dom';

import NavbarItems from './navbarItems';
import styles from './navbar.module.css';

const Navbar = () => {
  const elements = NavbarItems.map(({ id, text, link }) => (
    <li className={styles.navbarItem} key={id}>
      <NavLink className={styles.navbarItemLink} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.navbar}>{elements}</ul>;
};

export default Navbar;
