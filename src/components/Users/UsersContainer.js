import { useEffect } from 'react';
import { connect } from 'react-redux';
import { followTC, getUsersTC, unfollowTC } from '../../redux/usersReducer';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageLength,
  getTotalUsersCount,
  getUsersSuperSelector,
} from '../../redux/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import s from './Users.module.scss';

const UsersContainer = ({
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

  const onFollowClick = (id) => {
    follow(id);
  };

  const onUnfollowClick = (id) => {
    unfollow(id);
  };

  const onPageChanged = (page) => {
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
        isFetching={isFetching}
        followingInProgress={followingInProgress}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
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

export default connect(mapStateToProps, dispatchToProps)(UsersContainer);
