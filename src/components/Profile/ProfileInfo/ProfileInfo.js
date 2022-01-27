import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import ProfileNameStatus from './ProfileNameStatus/ProfileNameStatus';
import ProfileJob from './ProfileJob/ProfileJob';

const ProfileInfo = (props) => {
  if (!props.userProfile) return <Preloader />;

  return (
    <div className={s.profileInfo}>
      <div className={s.profilePictureBox}>
        <img
          className={s.profilePicture}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="profile img"
        />
      </div>
      <div className={s.profileInfo__descriptionBox}>
        <div className={s.profileInfo__description}>
          <ProfileNameStatus userProfile={props.userProfile} />
          <ProfileJob userProfile={props.userProfile} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
