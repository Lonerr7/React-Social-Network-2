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
      <div>
        <NavLink to={`/profile/${id}`}>
          <img
            className={s.user__avatar_big}
            src={!photos.large ? defAvatar : photos.large}
            alt="avatar"
          />
        </NavLink>
      </div>
      <p>{name}</p>
      <p>{status ? status : '------'}</p>
      {followed ? (
        <button
          onClick={() => {
            onUnfollowClick(id);
          }}
          disabled={followingInProgress.includes(id)}
        >
          Unfolow
        </button>
      ) : (
        <button
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
