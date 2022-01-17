import s from './Sidebar.module.scss';

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="/profile">
            Profile
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="/messages">
            Messages
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="/news">
            News
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="/music">
            Music
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
