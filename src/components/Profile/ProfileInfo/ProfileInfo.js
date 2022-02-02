import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import { useState } from 'react';
import ProfileEditForm from './ProfileEditForm/ProfileEditForm';
import ProfileData from './ProfileData/ProfileData';
import ProfileEditFormContainer from './ProfileEditForm/ProfileEditFormContainer';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.userProfile) return <Preloader />;

  return (
    <div className={s.profileInfo}>
      <div className={s.profilePictureBox}>
        <img
          className={s.profilePicture}
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          alt='profile img'
        />
      </div>
      <div className={s.profileInfo__descriptionBox}>
        <div className={s.profileInfo__description}>
          {props.isOwner && !editMode && (
            <button
              onClick={() => {
                setEditMode(true);
              }}
            >
              Edit profile
            </button>
          )}

          {editMode ? (
            <ProfileEditFormContainer
              editMode={editMode}
              setEditMode={setEditMode}
            />
          ) : (
            <ProfileData {...props} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
