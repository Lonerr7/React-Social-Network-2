import { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFetchingAC,
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

  const onFollowClick = (id) => {
    followUser(id);
  };

  const onUnfollowClick = (id) => {
    unfollowUser(id);
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
        // toggleIsFetching={toggleIsFetching}
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
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsersAC(users));
  },
  followUser: (userId) => {
    dispatch(followAC(userId));
  },
  unfollowUser: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsersCount: (usersCount) => {
    dispatch(setTotalUsersCountAC(usersCount));
  },
  setCurrentPage: (currentPage) => {
    dispatch(setCurrentPageAC(currentPage));
  },
  setIsFetching: (isFetching) => {
    dispatch(toggleFetchingAC(isFetching));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
