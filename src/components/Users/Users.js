import User from './User/User';
import s from './Users.module.scss';

const Users = ({ users, onFollowClick, onUnfollowClick }) => {
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
    />
  ));

  return <div className={s.users}>{usersElements}</div>;
};

export default Users;
