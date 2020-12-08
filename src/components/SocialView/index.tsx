import React from 'react';
import FriendList from './FriendList';
import Header from './Header';
import SocialNav from './SocialNav';

import classes from './index.module.scss';

const SocialView = () => {
  return <div className={classes.socialView}>
    <Header />
    <SocialNav />
    <FriendList />
  </div>
}

export default SocialView;