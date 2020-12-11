import React from 'react';

import Header from './Header';

import classes from './index.module.scss';

const HeaderView = () => {
  return <div className={classes.headerView}>
    <Header />
  </div>
}

export default HeaderView;