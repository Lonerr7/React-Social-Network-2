import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profilePictureBox}>
        <img
          className={s.profilePicture}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="profile img"
        />
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
