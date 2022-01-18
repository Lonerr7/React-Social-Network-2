import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts }) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
