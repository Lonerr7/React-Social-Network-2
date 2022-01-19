import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profilePage, dispatch }) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts
        posts={profilePage.posts}
        dispatch={dispatch}
        newPostText={profilePage.newPostText}
      />
    </div>
  );
};

export default Profile;
