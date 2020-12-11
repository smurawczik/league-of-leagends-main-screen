import React from 'react';

import riotPoints from '../../../assets/riot-points.png';
import blueEssence from '../../../assets/blue-essence.png';

import classes from './index.module.scss';

const PlayerPoints = () => {
  return <div className={classes.playerPoints}>
    <div className={classes.playerPoint}>
      <img src={riotPoints} alt="riot points" className={classes.playerPointIcon} />
      <span>177</span>
    </div>
    <div className={classes.playerPoint}>
      <img src={blueEssence} alt="blue essence" className={classes.playerPointIcon} />
      <span>130</span>
    </div>
  </div>
}

export default PlayerPoints;