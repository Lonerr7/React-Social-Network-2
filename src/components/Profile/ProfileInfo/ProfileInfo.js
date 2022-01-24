import s from './ProfileInfo.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import tick from '../../../images/tick.png';
import cross from '../../../images/cross.png';

const ProfileInfo = (props) => {
  const userProfile = props.userProfile;
  if (!userProfile) return <Preloader />;

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
          <div className={s.avatarBox}>
            <img
              className={s.avatar}
              src={userProfile.photos.large}
              alt="avatar"
            />
          </div>
          <div className={s.nameStatusContainer}>
            <p className={s.name}>{userProfile.fullName}</p>
            <p className={s.status}>status</p>
          </div>
          <div className={s.jobContainer}>
            <div className={s.lookingForAJobContanier}>
              <p>Looking for a job:</p>
              <img
                className={s.jobStatusImg}
                src={userProfile.lookingForAJob ? tick : cross}
                alt=""
              />
            </div>
            <div className={s.lookingForAJobDescrContanier}>
              <p>Job description:</p>
              <p>
                {userProfile.lookingForAJob
                  ? userProfile.jobDescription
                  : `---------`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
