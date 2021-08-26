import React from 'react';
import catalog from './style.module.css';
import PromoForm from './sections/second/index.jsx';
import ProductCategories from './sections/first';
import state from './../../../redux/state';

const Catalog = ({ cardData, itemsData }) => {
  return (
    <main className={catalog.wrapper}>
      <ProductCategories cardData={ state.сatalog.cardData }/>
      <PromoForm itemsData={state.сatalog.itemsData}/>
    </main>
  );
};

export default Catalog;
