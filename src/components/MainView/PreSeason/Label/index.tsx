import React from 'react';

import classes from './index.module.scss';

const Label = () => {
  return <div className={classes.preSeasonLabel}>
    <div className={classes.preSeasonLabelDarkBgLayer}>
      <div className={classes.preSeasonLabelLightBgLayer}>
        <span className={classes.preSeasonSign}>PRETEMPORADA</span>
        <span className={classes.preSeasonYear}>2021</span>
      </div>
    </div>
    <div className={classes.firstLayerRightTriangle}></div>
    <div className={classes.secondLayerRightTriangle}></div>
    <div className={classes.thirdLayerRightTriangle}></div>
    <div className={classes.forthLayerRightTriangle}></div>
    <div className={classes.fifthLayerRightTriangle}></div>
  </div>
}

export default Label;