import React from 'react';
import HeaderNav from '../HeaderNav';
import PlayButton from '../PlayButton';
import StatusButton from '../StatusButton';

import classes from './index.module.scss';

const Header = () => {
  return <div className={classes.header}>
    <PlayButton />
    <StatusButton />
    <HeaderNav />
  </div>
}

export default Header;