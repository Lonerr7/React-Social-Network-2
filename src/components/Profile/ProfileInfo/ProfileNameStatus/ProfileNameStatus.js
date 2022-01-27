import React, { useState } from 'react';
import defAvatar from '../../../../images/default-avatar.png';
import s from '../ProfileInfo.module.scss';

const ProfileNameStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  const enableEditMode = () => {
    setEditMode(true);
  };

  const disableEditMode = () => {
    setEditMode(false);
  };

  return (
    <div>
      <div className={s.avatarBox}>
        <img
          className={s.avatar}
          src={props.userProfile.photos.large || defAvatar}
          alt="avatar"
        />
      </div>
      <div className={s.nameStatusContainer}>
        <p className={s.name}>{props.userProfile.fullName}</p>
        {!editMode ? (
          <p onDoubleClick={enableEditMode} className={s.status}>
            status
          </p>
        ) : (
          <input
            className={s.status}
            onBlur={disableEditMode}
            autoFocus={true}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileNameStatus;