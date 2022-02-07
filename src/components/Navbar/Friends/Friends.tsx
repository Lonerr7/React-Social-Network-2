import React from 'react';
import { FriendType } from '../../../redux/sidebarReducer';
import Friend from './Friend/Friend';
import s from './Friends.module.scss';

type PropsType = {
  friends: Array<FriendType>;
};

const Friends: React.FC<PropsType> = ({ friends }) => {
  const friendsElements = friends.map((f) => (
    <Friend key={f.id} id={f.id} name={f.name} avatar={f.avatar} />
  ));

  return <div className={s.friends}>{friendsElements}</div>;
};

export default Friends;
