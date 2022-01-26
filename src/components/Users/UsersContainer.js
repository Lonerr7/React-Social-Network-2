import { useEffect } from 'react';
import { connect } from 'react-redux';
import { followTC, getUsersTC, unfollowTC } from '../../redux/usersReducer';
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
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageLength: state.usersPage.pageLength,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

const dispatchToProps = {
  follow: followTC,
  unfollow: unfollowTC,
  getUsers: getUsersTC,
};

export default connect(mapStateToProps, dispatchToProps)(UsersContainer);
