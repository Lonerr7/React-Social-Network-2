import React, { useEffect, useState } from 'react';
import defAvatar from '../../../../../images/default-avatar.png';
import ErrorMessage from '../../../../common/ErrorMessage/ErrorMessage';
import s from '../../ProfileInfo.module.scss';

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

  const onPhotoUpload = (e) => {
    if (e.target.files.length > 0) {
      const photo = e.target.files[0];
      props.uploadPhoto(photo);
    }
  };

  return (
    <div>
      <div className={s.avatarBox}>
        <img
          className={s.avatar}
          src={props.userProfile.photos.large || defAvatar}
          alt='avatar'
        />
        {props.isOwner ? <input type='file' onChange={onPhotoUpload} /> : null}
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
        {props.errorMessage && (
          <ErrorMessage>{props.errorMessage}</ErrorMessage>
        )}
      </div>
    </div>
  );
};

export default ProfileNameStatus;
