import s from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <nav className={s.navbar}>
      <ul>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="#">
            Profile
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="#">
            Messages
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="#">
            News
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="#">
            Music
          </a>
        </li>
        <li className={s.navbar__listItem}>
          <a className={s.navbar__link} href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
