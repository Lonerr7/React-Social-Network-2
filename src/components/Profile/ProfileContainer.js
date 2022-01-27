import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { setUserProfileTC } from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const match = useMatch(`/profile/:userId`);
  const userId = match ? match.params.userId : `21512`;

  useEffect(() => {
    props.setUserProfile(userId);
  }, [userId]);

  return <Profile userProfile={props.userProfile} />;
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

const dispatchToProps = {
  setUserProfile: setUserProfileTC,
};

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, dispatchToProps)(AuthRedirectComponent);
