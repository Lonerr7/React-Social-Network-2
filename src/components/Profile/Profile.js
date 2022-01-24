import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo userProfile={props.userProfile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
