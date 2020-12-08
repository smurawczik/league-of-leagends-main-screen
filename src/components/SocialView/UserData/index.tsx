import React from 'react';
import { FaBell } from "react-icons/fa";

import classes from './index.module.scss';

const UserStatus = () => {
  return <div className={classes.userStatus}>
    <div className={classes.userStatusIndicator} />
    <div className={classes.userStatusText}>"holo"</div>
  </div>
}

const UserData = () => {
  return <div className={classes.userData}>
    <div className={classes.userState}>
      <span className={classes.userName}>yiuriel</span>
      <UserStatus />
    </div>
    <div className={classes.notifications}>
      <FaBell size={18} />
    </div>
  </div>
}

export default UserData;