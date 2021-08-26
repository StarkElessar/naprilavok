import React from 'react';
import catalog from './style.module.css';
import PromoForm from './sections/second/index.jsx';
import ProductCategories from './sections/first';

const Catalog = ({ cardData, itemsData }) => {
  return (
    <main className={catalog.wrapper}>
      <ProductCategories cardData={ cardData }/>
      <PromoForm itemsData={ itemsData}/>
    </main>
  );
};

export default Catalog;
