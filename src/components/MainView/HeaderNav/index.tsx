import React from 'react';
import classnames from 'classnames';
import { FaUserCircle, FaSuitcase, FaHammer, FaCoins } from "react-icons/fa";

import PlayerPoints from '../PlayerPoints';

import classes from './index.module.scss';

const HeaderNavButton: React.FC<{ isSelected?: boolean }> = ({ isSelected, children }) => {
  const composedClasses = classnames(classes.headerNavButton, {
    [classes.selected]: isSelected,
  });

  return <button className={composedClasses}>{children}</button>
}

const HeaderNavDivider = () => {
  return <div className={classes.headerNavDivider}></div>
}

const HeaderNav = () => {
  return <div className={classes.headerNav}>
    <div className={classes.headerNavSection}>
      <HeaderNavButton isSelected>inicio</HeaderNavButton>
      <HeaderNavButton>TFT</HeaderNavButton>
      <HeaderNavButton>Clash</HeaderNavButton>
    </div>
    <div className={classes.headerNavSection}>
      <HeaderNavButton><FaUserCircle size={24} /></HeaderNavButton>
      <HeaderNavButton><FaSuitcase size={24} /></HeaderNavButton>
      <HeaderNavButton><FaHammer size={24} /></HeaderNavButton>
      <HeaderNavButton><FaCoins size={24} /></HeaderNavButton>
      <HeaderNavDivider />
      <PlayerPoints />
    </div>
  </div>
}

export default HeaderNav;