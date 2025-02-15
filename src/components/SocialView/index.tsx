import React from 'react';

import FriendList from './FriendList';
import Header from './Header';
import SocialNav from './SocialNav';
import Footer from './Footer';

import classes from './index.module.scss';

const SocialView = () => {
  return <div className={classes.socialView}>
    <Header />
    <SocialNav />
    <FriendList />
    <Footer />
  </div>
}

export default SocialView;