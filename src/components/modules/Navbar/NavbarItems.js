import { nanoid } from 'nanoid';

const NavbarItems = [
  { id: nanoid(), text: 'Home page', link: '/' },
  { id: nanoid(), text: 'Movies', link: '/movies' },
  // { id: nanoid(), text: 'Home page', link: '/movies/:movieId' },
  // { id: nanoid(), text: 'Home page', link: '/movies/:movieId/cast' },
  // { id: nanoid(), text: 'Home page', link: '/movies/:movieId/reviews' },
];
export default NavbarItems;
