import React from 'react';
import { HiUserAdd, HiFolderAdd } from "react-icons/hi";
import { FaListUl } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import classes from './index.module.scss';

const SocialNavButton: React.FC = ({ children }) => {
  return <button className={classes.socialNavButton}>{children}</button>
}

const SocialNav = () => {
  return <div className={classes.socialNav}>
    <span className={classes.socialNavTitle}>SOCIAL</span>
    <div className={classes.socialNavMenu}>
      <SocialNavButton><HiUserAdd size={24} /></SocialNavButton>
      <SocialNavButton><HiFolderAdd size={24} /></SocialNavButton>
      <SocialNavButton><FaListUl size={18} /></SocialNavButton>
      <SocialNavButton><BiSearch size={24} /></SocialNavButton>
    </div>
  </div>
}

export default SocialNav;