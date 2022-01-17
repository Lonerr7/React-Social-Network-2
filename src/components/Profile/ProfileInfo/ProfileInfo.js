import s from './ProfileInfo.module.scss';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.profilePictureBox}>
        <img
          className={s.profilePicture}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="profile img"
        />
      </div>
      <div className={s.profileInfo__description}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
