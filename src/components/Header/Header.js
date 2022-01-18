import s from './Header.module.scss';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to="/">
        <img className={s.logo} src={logo} alt="logo" />
      </NavLink>
    </header>
  );
};

export default Header;
