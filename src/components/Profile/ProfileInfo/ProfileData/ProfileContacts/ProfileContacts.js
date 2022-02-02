import React from 'react';
import s from './ProfileContacts.module.scss';

const ProfileContacts = (props) => {
  return (
    <div className={s.profileContacts}>
      <p className={s.contactTitle}>{props.contactTitle}:</p>
      <p className={s.contactValue}>{props.contactValue}</p>
    </div>
  );
};

export default ProfileContacts;
