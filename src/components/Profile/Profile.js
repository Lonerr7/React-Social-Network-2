import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo
        userProfile={props.userProfile}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
        isOwner={props.isOwner}
        uploadPhoto={props.uploadPhoto}
        userId={props.userId}
        errorMessage={props.errorMessage}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
