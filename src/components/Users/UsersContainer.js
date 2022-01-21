import { useEffect } from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';
import s from './Users.module.scss';

const UsersContainer = ({ users, setUsers, followUser, unfollowUser }) => {
  const usersData = [
    {
      id: 1,
      name: 'Vanya',
      followed: true,
      status: `I'm a boss`,
      photos: {
        small:
          'https://pbs.twimg.com/profile_images/1423824188968734721/ub_DdyKZ_400x400.jpg',
        large:
          'https://pbs.twimg.com/profile_images/1423824188968734721/ub_DdyKZ_400x400.jpg',
      },
    },
    {
      id: 2,
      name: 'Dima',
      followed: false,
      status: `I'm an ass`,
      photos: {
        small:
          'https://pbs.twimg.com/profile_images/1423824188968734721/ub_DdyKZ_400x400.jpg',
        large:
          'https://pbs.twimg.com/profile_images/1423824188968734721/ub_DdyKZ_400x400.jpg',
      },
    },
    {
      id: 3,
      name: 'Sasha',
      followed: true,
      status: `I'm a cock`,
      photos: {
        small:
          'https://pbs.twimg.com/profile_images/1423824188968734721/ub_DdyKZ_400x400.jpg',
        large:
          'https://pbs.twimg.com/profile_images/1423824188968734721/ub_DdyKZ_400x400.jpg',
      },
    },
  ];

  useEffect(() => {
    setUsers(usersData);
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
