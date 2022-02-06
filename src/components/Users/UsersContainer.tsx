import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootStateType } from '../../redux/redux-store';
import { followTC, getUsersTC, unfollowTC } from '../../redux/usersReducer';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageLength,
  getTotalUsersCount,
  getUsersSuperSelector,
} from '../../redux/usersSelectors';
import { UserType } from '../../types/types';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import s from './Users.module.scss';

type MapStateType = {
  users: Array<UserType>;
  pageLength: number;
  currentPage: number;
  totalUsersCount: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};
type MapDispatchType = {
  follow: (id: number) => void;
  getUsers: (currentPage: number, pageLength: number) => void;
  unfollow: (id: number) => void;
};
type OwnPropsType = {};

type PropsType = MapStateType & MapDispatchType & OwnPropsType;

const UsersContainer: React.FC<PropsType> = ({
  users,
  follow,
  getUsers,
  unfollow,
  pageLength,
  currentPage,
  totalUsersCount,
  isFetching,
  followingInProgress,
}) => {
  useEffect(() => {
    getUsers(currentPage, pageLength);
  }, []);

  const onFollowClick = (id: number) => {
    follow(id);
  };

  const onUnfollowClick = (id: number) => {
    unfollow(id);
  };

  const onPageChanged = (page: number) => {
    getUsers(page, pageLength);
  };

  return (
    <div className={s.usersWrapper}>
      {isFetching ? <Preloader /> : null}
      <Users
        users={users}
        onFollowClick={onFollowClick}
        onUnfollowClick={onUnfollowClick}
        pageLength={pageLength}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        onPageChanged={onPageChanged}
        followingInProgress={followingInProgress}
      />
    </div>
  );
};

const mapStateToProps = (state: RootStateType): MapStateType => ({
  users: getUsersSuperSelector(state),
  currentPage: getCurrentPage(state),
  totalUsersCount: getTotalUsersCount(state),
  pageLength: getPageLength(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

const dispatchToProps = {
  follow: followTC,
  unfollow: unfollowTC,
  getUsers: getUsersTC,
};

export default connect<MapStateType, MapDispatchType, OwnPropsType, RootStateType>(
  mapStateToProps,
  dispatchToProps
)(UsersContainer);
