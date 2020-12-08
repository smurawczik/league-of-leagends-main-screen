import React from 'react';

import lolIcon from '../../../assets/lol-icon.png';

import classes from './index.module.scss';

const PlayButton = () => {
  return <div className={classes.playButton}>
    <img src={lolIcon} alt="lol icon" width='50' className={classes.playButtonIcon} />
    <div className={classes.playButtonOuter}>
      <div className={classes.playButtonBlueBorder}>
        <div className={classes.playButtonBackground}>
          <span className={classes.playButtonText}>JUEGA</span>
        </div>
      </div>
    </div>
  </div>
}

export default PlayButton;