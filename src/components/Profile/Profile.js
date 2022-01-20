import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ store }) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};

export default Profile;
