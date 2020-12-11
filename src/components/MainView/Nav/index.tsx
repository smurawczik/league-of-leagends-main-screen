import React from 'react';
import classNames from 'classnames';

import classes from './index.module.scss';

const NavItem: React.FC<{ isSelected?: boolean }> = ({ children, isSelected }) => {
  return <button className={classNames(classes.navItem, {
    [classes.navItemSelected]: isSelected
  })}>
    {children}
  </button>
}

const Nav = () => {
  return <div className={classes.nav}>
    <NavItem isSelected>PRETEMPORADA</NavItem>
    <NavItem>VISTA GENERAL</NavItem>
    <NavItem>NOTAS DE VERSION</NavItem>
  </div>
}

export default Nav;