import React from 'react';
import chainsawPage from './style.module.css';
// import { NavLink } from 'react-router-dom';

const Chainsaw = (props) => {
  return (
    <div>
      <h1 className={chainsawPage.title}>
        Немецкие Бензопилы
      </h1>
    </div>
  );
};

export default Chainsaw;