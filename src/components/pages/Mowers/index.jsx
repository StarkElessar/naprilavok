import React from 'react';
import mowersPage from './Mowers.module.css';
// import { NavLink } from 'react-router-dom';

const Mowers = (props) => {
   return (
      <div>
         <h1 className={mowersPage.title}>
            Бензиновые триммеры
         </h1>
      </div>
   );
};

export default Mowers;