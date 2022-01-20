import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
