import React from 'react';
// import { NavLink } from 'react-router-dom';
import mainBtn from './style.module.css';

const MainBtn = (props) => {
  return (
    <a href="https://google.com" className={mainBtn.mainButton}>{props.text}</a>
  )
}

export default MainBtn;
