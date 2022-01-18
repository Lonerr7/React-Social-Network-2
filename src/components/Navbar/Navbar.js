import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Sidebar.module.scss';

const Navbar = ({sidebar}) => {
  const setActive = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <div className={s.navbar}>
      <nav className={s.navbar__nav}>
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
      <Friends friends={sidebar.friends} />
    </div>
  );
};

export default Navbar;
