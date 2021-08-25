import React from 'react';
import catalog from './style.module.css';
import PromoForm from './sections/second/index.jsx';
import ProductCategories from './sections/first';

const Catalog = (props) => {
  return (
    <main className={catalog.wrapper}>
      <ProductCategories />
      <PromoForm />
    </main>
  );
};



export default Catalog;
