import React from 'react';
import greenhousesPage from './style.module.css';
// import { NavLink } from 'react-router-dom';

const Greenhouses = (props) => {
  return (
    <div>
      <h1 className={greenhousesPage.title}>
        Теплицы из поликарбоната
      </h1>
    </div>
  );
};

export default Greenhouses;