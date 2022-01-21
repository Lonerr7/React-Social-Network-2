import { useEffect } from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';
import s from './Users.module.scss';

const UsersContainer = ({ users, setUsers, followUser, unfollowUser }) => {
   useEffect(() => {
    (async () => {
      const response = await usersAPI.getUsers();
      console.log(response.data.items[0]);
      setUsers(response.data.items);
    })();
  }, []);

  const onFollowClick = (id) => {
    followUser(id);
  };

  const onUnfollowClick = (id) => {
    unfollowUser(id);
  };

  return (
    <div className={s.usersWrapper}>
      <Users
        users={users}
        onFollowClick={onFollowClick}
        onUnfollowClick={onUnfollowClick}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
