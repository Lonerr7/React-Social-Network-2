import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';
// import withAuthRedirect from '../../hoc/withAuthRedirect';
import {
  getProfileStatusTC,
  setUserProfileTC,
  updateProfileStatusTC,
} from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const match = useMatch(`/profile/:userId`);
  const userId = match ? match.params.userId : `21512`;

  useEffect(() => {
    props.setUserProfile(userId);
    props.getProfileStatus(userId);
  }, [userId]);

  return (
    <Profile
      userProfile={props.userProfile}
      status={props.status}
      updateProfileStatus={props.updateProfileStatus}
    />
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  status: state.profilePage.status,
});

const dispatchToProps = {
  setUserProfile: setUserProfileTC,
  getProfileStatus: getProfileStatusTC,
  updateProfileStatus: updateProfileStatusTC,
};

export default compose(
  connect(mapStateToProps, dispatchToProps)
  // withAuthRedirect
)(ProfileContainer);
