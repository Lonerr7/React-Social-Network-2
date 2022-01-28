import { NavLink } from 'react-router-dom';
import s from '../Users.module.scss';
import defAvatar from '../../../images/default-avatar.png';

const User = ({
  id,
  name,
  status,
  followed,
  photos,
  onFollowClick,
  onUnfollowClick,
  followingInProgress,
}) => {
  return (
    <div className={s.user}>
      <div className={s.user__avatarBox}>
        <NavLink to={`/profile/${id}`}>
          <img
            className={s.user__avatar_big}
            src={!photos.large ? defAvatar : photos.large}
            alt="avatar"
          />
        </NavLink>
      </div>
      <NavLink to={`/profile/${id}`} className={s.user__name}>{name}</NavLink>
      <p className={s.user__status}>{status ? status : '------'}</p>
      {followed ? (
        <button
        className={s.userBtn}
          onClick={() => {
            onUnfollowClick(id);
          }}
          disabled={followingInProgress.includes(id)}
        >
          Unfolow
        </button>
      ) : (
        <button
        className={s.userBtn}
          onClick={() => {
            onFollowClick(id);
          }}
          disabled={followingInProgress.includes(id)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default User;
