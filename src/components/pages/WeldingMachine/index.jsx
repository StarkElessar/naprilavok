import React from 'react';
import weldingPage from './style.module.css';

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