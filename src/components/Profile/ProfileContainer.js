import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { profileAPI } from '../../api/api';
import { setUserProfileAC } from '../../redux/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
  useEffect(() => {
    (async () => {
      const response = await profileAPI.getUserProfile(21512);
      console.log(response.data);
      props.setUserProfile(response.data);
    })();
  }, []);

  return <Profile userProfile={props.userProfile} />;
};

const mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
});

const dispatchToProps = {
  setUserProfile: setUserProfileAC,
};

export default connect(mapStateToProps, dispatchToProps)(ProfileContainer);
