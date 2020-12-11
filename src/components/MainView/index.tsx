import React from 'react';

import Nav from './Nav';
import NewChamp from './NewChamp';

import classes from './index.module.scss';

const MainView = () => {
  return <div className={classes.mainView}>
    <Nav />
    <div className={classes.newChampContainer}>
      <NewChamp />
    </div>
  </div>
}

export default MainView;