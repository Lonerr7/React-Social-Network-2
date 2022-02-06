import s from './Header.module.scss';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import React from 'react';

type PropsType = {
  login: string | null;
  isAuth: boolean;
  id: number | null;
  onLogOut: () => void;
};

const Header: React.FC<PropsType> = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logoBox}>
        <NavLink to='/'>
          <img className={s.logo} src={logo} alt='logo' />
        </NavLink>
      </div>
      <div className={s.loginBox}>
        {props.isAuth ? (
          <div className={s.loginControls}>
            <p className={s.loginName}>
              Hello, <NavLink to={`profile/${props.id}`}>{props.login}</NavLink>
            </p>
            <button className={s.logoutBtn} onClick={props.onLogOut}>
              Log out
            </button>
          </div>
        ) : (
          <NavLink className={s.loginLink} to='/login'>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
