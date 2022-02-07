import React from 'react';
import { NavLink } from 'react-router-dom';
import { FriendType } from '../../../../redux/sidebarReducer';
import s from './Friend.module.scss';

type PropsType = FriendType;

const Friend: React.FC<PropsType> = ({ id, name, avatar }) => {
  return (
    <div className={s.friend}>
      <NavLink to={`/messages/${id}`}>
        <div>
          <img className={s.avatar} src={avatar} alt='avatar' />
        </div>
        <p>{name}</p>
      </NavLink>
    </div>
  );
};

export default Friend;
