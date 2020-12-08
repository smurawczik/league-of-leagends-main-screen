import React from 'react';
import Header from './Header';

import classes from './index.module.scss';

const MainView = () => {
  return <div className={classes.mainView}>
    <Header />
  </div>
}

export default MainView;