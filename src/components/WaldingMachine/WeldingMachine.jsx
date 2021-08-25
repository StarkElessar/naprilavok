import React from 'react';
import weldingPage from './WeldingMachine.module.css';
// import { NavLink } from 'react-router-dom';

const WeldingMachine = (props) => {
   return (
      <div>
         <h1 className={weldingPage.title}>
            Сварочные аппараты
         </h1>
      </div>
   );
};

export default WeldingMachine;