import React from 'react';

import classes from './index.module.scss';

const StatusButton = () => {
  return <div className={classes.statusButtonContainer}>
    <div className={classes.statusButtonInnerRing}>
      <div className={classes.statusButtonSign}>!</div>
    </div>
  </div>
}

export default StatusButton;