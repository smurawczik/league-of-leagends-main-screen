import React from 'react';
import classNames from 'classnames';

import classes from './index.module.scss';

const Grid = () => {
  return <div className={classes.grid}>
    <div className={classes.upperGrid}>
      <div className={classes.gridItem}><div className={classes.gridContent}></div></div>
      <div className={classNames(classes.gridItem, classes.gridItemHoverTranslate)}><div className={classes.gridContent}></div></div>
      <div className={classNames(classes.gridItem, classes.gridItemHoverTranslate)}><div className={classes.gridContent}></div></div>
    </div>
    <div className={classes.lowerGrid}>
      <div className={classes.gridItem}><div className={classes.gridContent}></div></div>
      <div className={classes.gridItem}><div className={classes.gridContent}></div></div>
    </div>
  </div>
}

export default Grid;