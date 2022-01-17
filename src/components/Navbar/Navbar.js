import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.scss';

const Navbar = () => {
  const setActive = ({isActive}) => isActive ? s.activeLink : '';

  return (
    <nav className={s.navbar}>
      <ul>
        <li className={s.navbar__listItem}>
          <NavLink className={setActive} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={s.navbar__listItem}>
          <NavLink className={setActive} to="/messages">
            Messages
          </NavLink>
        </li>
        <li className={s.navbar__listItem}>
          <NavLink className={setActive} to="/news">
            News
          </NavLink>
        </li>
        <li className={s.navbar__listItem}>
          <NavLink className={setActive} to="/music">
            Music
          </NavLink>
        </li>
        <li className={s.navbar__listItem}>
          <NavLink className={setActive} to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
