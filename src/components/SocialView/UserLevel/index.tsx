import React from 'react';

import lolProfile from '../../../assets/lol-profile.png';

import classes from './index.module.scss';

const UserLevel = () => {
  return <div className={classes.userLevel}>
    <img src={lolProfile} alt="user level" />
  </div>
}

export default UserLevel;