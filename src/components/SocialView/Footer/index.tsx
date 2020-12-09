import React from 'react';
import { BsChatFill, BsMicFill } from "react-icons/bs";
import { FaScroll, FaBug } from "react-icons/fa";

import classes from './index.module.scss';

const FooterNavItem: React.FC = ({ children }) => {
  return <button className={classes.footerNavItem}>
    <div className={classes.footerNavItemInner}>
      {children}
    </div>
  </button>
}

const GameVersion = () => <span className={classes.gameVersion}>V10.24</span>;

const Footer = () => {
  return <div className={classes.footer}>
    <div className={classes.footerFirstPart}>
      <FooterNavItem><BsChatFill size={18} /></FooterNavItem>
      <FooterNavItem><FaScroll size={18} /></FooterNavItem>
      <FooterNavItem><BsMicFill size={18} /></FooterNavItem>
      <GameVersion />
    </div>
    <FooterNavItem><FaBug size={18} /></FooterNavItem>
  </div>
}

export default Footer;