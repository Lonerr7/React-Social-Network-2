import React from 'react';
import ProfileContacts from './ProfileContacts/ProfileContacts';
import ProfileJob from './ProfileJob/ProfileJob';
import ProfileNameStatus from './ProfileNameStatus/ProfileNameStatus';

const ProfileData = (props) => {
  const contacts = props.userProfile.contacts;
  return (
    <div>
      <ProfileNameStatus
        userProfile={props.userProfile}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
        isOwner={props.isOwner}
        uploadPhoto={props.uploadPhoto}
      />
      <ProfileJob userProfile={props.userProfile} />
      {Object.keys(contacts).map((key) => (
        <ProfileContacts
          key={key}
          contactTitle={key}
          contactValue={contacts[key]}
        />
      ))}
    </div>
  );
};

export default ProfileData;
