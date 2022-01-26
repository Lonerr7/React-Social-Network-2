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
  followingInProgress
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

  const totalPagesCount = Math.ceil(totalUsersCount / pageLength);

  const pageNumbers = [];
  for (let i = 1; i <= totalPagesCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.users}>
      <div className={s.pageNumbers__box}>
        {pageNumbers.map((p) => (
          <span
            onClick={() => {
              onPageChanged(p);
            }}
            className={currentPage === p ? s.active + ' ' + s.page : s.page}
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {usersElements}
    </div>
  );
};

export default Users;
