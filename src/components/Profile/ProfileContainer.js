import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';
// import withAuthRedirect from '../../hoc/withAuthRedirect';
import {
  getProfileStatusTC,
  setUserProfileTC,
  updateProfileStatusTC,
  uploadPhotoTC,
} from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const match = useMatch(`/profile/:userId`);
  console.log(match);
  const userId = match ? match.params.userId : props.userId;

  useEffect(() => {
    props.setUserProfile(userId);
    props.getProfileStatus(userId);
  }, [userId]);

  return (
    <Profile
      userProfile={props.userProfile}
      status={props.status}
      updateProfileStatus={props.updateProfileStatus}
      isOwner={userId === props.userId}
      uploadPhoto={props.uploadPhoto}
    />
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  status: state.profilePage.status,
  userId: state.auth.id,
});

const dispatchToProps = {
  setUserProfile: setUserProfileTC,
  getProfileStatus: getProfileStatusTC,
  updateProfileStatus: updateProfileStatusTC,
  uploadPhoto: uploadPhotoTC,
};

export default compose(
  connect(mapStateToProps, dispatchToProps),
  // withAuthRedirect
)(ProfileContainer);
