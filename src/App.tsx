import React from 'react';

import classes from './App.module.scss';
import HeaderView from './components/HeaderView';
import MainView from './components/MainView';
import SocialView from './components/SocialView';

function App() {
  return (
    <div className={classes.leagueOfLegends}>
      <div className={classes.backgroundOverlay}></div>
      <div className={classes.headerAndMainView}>
        <HeaderView />
        <MainView />
      </div>
      <SocialView />
    </div>
  );
}

export default App;
