import React from 'react';

import classes from './App.module.scss';
import MainView from './components/MainView';
import SocialView from './components/SocialView';

function App() {
  return (
    <div className={classes.leagueOfLegends}>
      <div className={classes.backgroundOverlay}></div>
      <MainView />
      <SocialView />
    </div>
  );
}

export default App;
