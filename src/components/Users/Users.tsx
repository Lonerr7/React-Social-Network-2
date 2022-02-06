import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.scss';
import { UserType } from '../../types/types';
import React from 'react';

type PropsType = {
  users: Array<UserType>;
  onFollowClick: (id: number) => void;
  onUnfollowClick: (id: number) => void;
  pageLength: number;
  currentPage: number;
  totalUsersCount: number;
  onPageChanged: (page: number) => void; 
  followingInProgress: Array<number>;
};

const Users: React.FC<PropsType> = ({
  users,
  onFollowClick,
  onUnfollowClick,
  pageLength,
  currentPage,
  totalUsersCount,
  onPageChanged,
  followingInProgress,
}) => {
  const usersElements = users.map((u) => (
    <User
      id={u.id}
      key={u.id}
      name={u.name}
      followed={u.followed}
      status={u.status}
      photos={u.photos}
      onFollowClick={onFollowClick}
      onUnfollowClick={onUnfollowClick}
      followingInProgress={followingInProgress}
    />
  ));

  return (
    <div className={s.users}>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageLength={pageLength}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      {usersElements}
    </div>
  );
};

export default Users;
