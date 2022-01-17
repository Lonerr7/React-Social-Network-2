import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
