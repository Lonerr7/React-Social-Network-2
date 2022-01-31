import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.scss';

const Users = ({
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
