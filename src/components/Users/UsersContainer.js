import { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from '../../redux/usersReducer';
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
}) => {
  useEffect(() => {
    (async () => {
      const response = await usersAPI.getUsers(currentPage, pageLength);
      setUsers(response.data.items);
      setUsersCount(response.data.totalCount);
    })();
  }, []);

  const onFollowClick = (id) => {
    followUser(id);
  };

  const onUnfollowClick = (id) => {
    unfollowUser(id);
  };

  const onPageChanged = async (page) => {
    const response = await usersAPI.getUsers(page, pageLength);
    setUsers(response.data.items);
    setCurrentPage(page);
  };

  return (
    <div className={s.usersWrapper}>
      <Users
        users={users}
        onFollowClick={onFollowClick}
        onUnfollowClick={onUnfollowClick}
        pageLength={pageLength}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        onPageChanged={onPageChanged}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageLength: state.usersPage.pageLength,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
