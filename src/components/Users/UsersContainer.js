import { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFetchingAC,
  toggleFollowingProgressAC,
  unfollowAC,
} from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';
import s from './Users.module.scss';

const UsersContainer = ({
  users,
  setUsers,
  followUser,
  unfollowUser,
  pageLength,
  currentPage,
  totalUsersCount,
  setUsersCount,
  setCurrentPage,
  isFetching,
  setIsFetching,
  followingInProgress,
  toggleFollowingProgress,
}) => {
  useEffect(() => {
    (async () => {
      toggleIsFetching(true);
      const response = await usersAPI.getUsers(currentPage, pageLength);
      toggleIsFetching(false);
      setUsers(response.data.items);
      setUsersCount(response.data.totalCount);
    })();
  }, []);

  const toggleIsFetching = (isFetching) => {
    setIsFetching(isFetching);
  };

  const onFollowClick = async (id) => {
    try {
      toggleFollowingProgress(true, id);
      const response = await usersAPI.followUser(id);
      if (response.data.resultCode === 0) followUser(id);
      toggleFollowingProgress(false, id);
    } catch (error) {
      console.error(error);
    }
  };

  const onUnfollowClick = async (id) => {
    try {
      toggleFollowingProgress(true, id);
      const response = await usersAPI.unfollowUser(id);
      if (response.data.resultCode === 0) unfollowUser(id);
      toggleFollowingProgress(false, id);
    } catch (error) {
      console.error(error);
    }
  };

  const onPageChanged = async (page) => {
    toggleIsFetching(true);
    const response = await usersAPI.getUsers(page, pageLength);
    toggleIsFetching(false);
    setUsers(response.data.items);
    setCurrentPage(page);
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
  setUsers: setUsersAC,
  followUser: followAC,
  unfollowUser: unfollowAC,
  setUsersCount: setTotalUsersCountAC,
  setCurrentPage: setCurrentPageAC,
  setIsFetching: toggleFetchingAC,
  toggleFollowingProgress: toggleFollowingProgressAC,
};

export default connect(mapStateToProps, dispatchToProps)(UsersContainer);
