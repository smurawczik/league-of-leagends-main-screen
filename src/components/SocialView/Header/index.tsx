import React from 'react';

import HelperNav from '../HelperNav';
import UserData from '../UserData';
import UserLevel from '../UserLevel';

import classes from './index.module.scss';

const Header = () => {
  return <div className={classes.header}>
    <UserLevel />
    <div className={classes.userDataAndHelperNav}>
      <HelperNav />
      <UserData />
    </div>
  </div>
}

export default Header;