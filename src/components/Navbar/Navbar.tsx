import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootStateType } from '../../redux/redux-store';
import { InitialSidebarStateType } from '../../redux/sidebarReducer';
import Friends from './Friends/Friends';
import s from './Sidebar.module.scss';

type MapStatePropsType = {
  sidebar: InitialSidebarStateType;
};

type PropsType = MapStatePropsType;

const Navbar: React.FC<PropsType> = ({ sidebar }) => {
  const setActive = ({ isActive }: any) => (isActive ? s.activeLink : s.link);

  return (
    <div className={s.navbar}>
      <nav className={s.navbar__nav}>
        <ul>
          <li className={s.navbar__listItem}>
            <NavLink className={setActive} to='/profile'>
              Profile
            </NavLink>
          </li>
          <li className={s.navbar__listItem}>
            <NavLink className={setActive} to='/messages'>
              Messages
            </NavLink>
          </li>
          <li className={s.navbar__listItem}>
            <NavLink className={setActive} to='/users'>
              Users
            </NavLink>
          </li>
          <li className={s.navbar__listItem}>
            <NavLink className={setActive} to='/news'>
              News
            </NavLink>
          </li>
          <li className={s.navbar__listItem}>
            <NavLink className={setActive} to='/music'>
              Music
            </NavLink>
          </li>
          <li className={s.navbar__listItem}>
            <NavLink className={setActive} to='/settings'>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <Friends friends={sidebar.friends} />
    </div>
  );
};

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
  sidebar: state.sidebar,
});

export default connect<MapStatePropsType, null, null, RootStateType>(
  mapStateToProps,
  null
)(Navbar);
