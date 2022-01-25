import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { setUserProfileAC } from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  const match = useMatch(`/profile/:userId`);
  const userId = match ? match.params.userId : `21512`;

  useEffect(() => {
    (async () => {
      const response = await profileAPI.getUserProfile(userId);
      props.setUserProfile(response.data);
    })();
  }, [userId]);

  return <Profile userProfile={props.userProfile} />;
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

const dispatchToProps = {
  setUserProfile: setUserProfileAC,
};

export default connect(mapStateToProps, dispatchToProps)(ProfileContainer);
