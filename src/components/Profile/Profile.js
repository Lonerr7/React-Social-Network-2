import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, addPost }) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts posts={profilePage.posts} addPost={addPost} />
    </div>
  );
};

export default Profile;
