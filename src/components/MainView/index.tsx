import React from 'react';

import Nav from './Nav';
import NewChamp from './NewChamp';

import classes from './index.module.scss';
import PreSeason from './PreSeason';

const MainView = () => {
  return <div className={classes.mainView}>
    <Nav />
    <div className={classes.newChampContainer}>
      <NewChamp />
    </div>
    <PreSeason />
  </div>
}

export default MainView;