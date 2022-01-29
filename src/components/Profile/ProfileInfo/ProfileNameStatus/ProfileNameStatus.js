import React, { useEffect, useState } from 'react';
import defAvatar from '../../../../images/default-avatar.png';
import s from '../ProfileInfo.module.scss';

const ProfileNameStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(props.status);

  useEffect(() => {
    setLocalStatus(props.status);
  }, [props.status]);

  const enableEditMode = () => {
    setEditMode(true);
  };

  const disableEditMode = () => {
    props.updateProfileStatus(localStatus);
    setEditMode(false);
  };

  const onLocalStatusChange = (e) => {
    setLocalStatus(e.target.value);
  };

  return (
    <div>
      <div className={s.avatarBox}>
        <img
          className={s.avatar}
          src={props.userProfile.photos.large || defAvatar}
          alt='avatar'
        />
      </div>
      <div className={s.nameStatusContainer}>
        <p className={s.name}>{props.userProfile.fullName}</p>
        {!editMode ? (
          <p onDoubleClick={enableEditMode} className={s.status}>
            {props.status ? props.status : '-------'}
          </p>
        ) : (
          <input
            className={s.status}
            onBlur={disableEditMode}
            autoFocus={true}
            value={localStatus}
            onChange={onLocalStatusChange}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileNameStatus;
