import s from './Header.module.scss';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logoBox}>
        <NavLink to="/">
          <img className={s.logo} src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className={s.loginBox}>
        {props.isAuth ? (
          <div className={s.loginControls}>
            <p className={s.loginName}>{props.login}</p>
            <button onClick={props.onLogOut}>Log out</button>
          </div>
        ) : (
          <NavLink className={s.loginLink} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
