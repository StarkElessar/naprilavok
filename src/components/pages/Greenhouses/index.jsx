import React from 'react';
import green from './green.module.css';

const Greenhouses = (props) => {
  return (
    <main className={green.wrapper}>
      <h1 className={green.title}>
        Теплицы из поликарбоната
      </h1>
    </main>
  );
};

export default Greenhouses;