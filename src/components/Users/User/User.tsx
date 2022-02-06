import { NavLink } from 'react-router-dom';
import s from '../Users.module.scss';
import defAvatar from '../../../images/default-avatar.png';
import { PhotosType } from '../../../types/types';
import React from 'react';

type PropsType = {
  id: number;
  name: string;
  status: string | null;
  photos: PhotosType;
  followed: boolean;
  onFollowClick: (id: number) => void;
  onUnfollowClick: (id: number) => void;
  followingInProgress: Array<number>;
};

const User: React.FC<PropsType> = ({
  id,
  name,
  status,
  photos,
  followed,
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
            alt='avatar'
          />
        </NavLink>
      </div>
      <NavLink to={`/profile/${id}`} className={s.user__name}>
        {name}
      </NavLink>
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
