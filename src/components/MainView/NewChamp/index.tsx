import React from 'react';

import Description from './Description';
import Divider from './Divider';

import classes from './index.module.scss';

const NewChamp = () => {
  return <div className={classes.newChamp}>
    <Divider />
    <div className={classes.champDataWrapper}>
      <Description />
    </div>
  </div>
}

export default NewChamp;