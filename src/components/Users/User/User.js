import s from '../Users.module.scss';

const User = ({
  id,
  name,
  status,
  followed,
  photos,
  onFollowClick,
  onUnfollowClick,
}) => {
  return (
    <div className={s.user}>
      <div>
        <img className={s.user__avatar_big} src={photos.large} alt="avatar" />
      </div>
      <p>{name}</p>
      <p>{status}</p>
      {followed ? (
        <button
          onClick={() => {
            onUnfollowClick(id);
          }}
        >
          Unfolow
        </button>
      ) : (
        <button
          onClick={() => {
            onFollowClick(id);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default User;
