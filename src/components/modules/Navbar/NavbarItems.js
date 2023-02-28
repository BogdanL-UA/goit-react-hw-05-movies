import { nanoid } from 'nanoid';

const NavbarItems = [
  { id: nanoid(), text: 'Home page', link: '/' },
  { id: nanoid(), text: 'Movies', link: '/movies' },
];
export default NavbarItems;
