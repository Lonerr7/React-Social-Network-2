import React from 'react';
import tick from '../../../../images/tick.png';
import cross from '../../../../images/cross.png';
import s from '../ProfileInfo.module.scss';

const ProfileJob = (props) => {
  return (
    <div>
      <div className={s.jobContainer}>
        <div className={s.lookingForAJobContanier}>
          <p>Looking for a job:</p>
          <img
            className={s.jobStatusImg}
            src={props.userProfile.lookingForAJob ? tick : cross}
            alt=""
          />
        </div>
        <div className={s.lookingForAJobDescrContanier}>
          <p>Job description:</p>
          <p>
            {props.userProfile.lookingForAJob
              ? props.userProfile.jobDescription
              : `---------`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileJob;
