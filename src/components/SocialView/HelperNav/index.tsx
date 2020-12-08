import React from 'react';
import { BsQuestion } from "react-icons/bs";
import { FaCog, FaRegWindowMinimize } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


import classes from './index.module.scss';

const HelperNavButton: React.FC = ({ children }) => {
  return <button className={classes.helperNavButton}>{children}</button>
}

const HelperNav = () => {
  return <div className={classes.helperNav}>
    <HelperNavButton><BsQuestion size={24} /></HelperNavButton>
    <HelperNavButton><FaRegWindowMinimize size={16} /></HelperNavButton>
    <HelperNavButton><FaCog size={16} /></HelperNavButton>
    <HelperNavButton><IoClose size={24} /></HelperNavButton>
  </div>
}

export default HelperNav;