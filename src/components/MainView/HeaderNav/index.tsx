import React, { useState } from 'react';
import classnames from 'classnames';
import { FaUserCircle, FaSuitcase, FaHammer, FaCoins } from "react-icons/fa";

import PlayerPoints from '../PlayerPoints';

import classes from './index.module.scss';

const HeaderNavButton: React.FC<{ isSelected?: boolean }> = ({ isSelected, children }) => {
  const composedClasses = classnames(classes.headerNavButton, {
    [classes.selected]: isSelected,
  });

  const [glowVisible, setGlowVisible] = useState(false);
  const [glowPosition, setGlowPosition] = useState(0);
  const [glowOpacity, setGlowOpacity] = useState(.5);

  const handleGlow = () => {
    setGlowVisible(true);
  }

  const handleGlowMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const width = e.currentTarget.offsetWidth;
    const xPos = e.nativeEvent.offsetX;
    setGlowPosition(xPos);
    if (xPos < 15 || xPos > width - 15) {
      setGlowOpacity(.5);
    } else if (xPos < 40 || xPos > width - 40) {
      setGlowOpacity(.75);
    } else {
      setGlowOpacity(1);
    }
  }

  const stopMovingGlow = () => {
    setGlowVisible(false);
  }

  return <button className={composedClasses} onMouseEnter={handleGlow} onMouseMove={handleGlowMove} onMouseLeave={stopMovingGlow}>
    {isSelected ? <div className={classes.selectedTriangle}><div><span /></div></div> : null}
    {children}
    {glowVisible && !isSelected && <div className={classes.hoverableGlow} style={{ left: `${glowPosition}px`, opacity: glowOpacity }} />}
  </button>
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
      <HeaderNavButton><FaUserCircle size={26} /></HeaderNavButton>
      <HeaderNavButton><FaSuitcase size={26} /></HeaderNavButton>
      <HeaderNavButton><FaHammer size={26} /></HeaderNavButton>
      <HeaderNavButton><FaCoins size={26} /></HeaderNavButton>
      <HeaderNavDivider />
      <PlayerPoints />
    </div>
  </div>
}

export default HeaderNav;