import React from 'react';
import categories from './categories.module.css';
import CatalogCard from './components';

const ProductCategories = ({cardData}) => {

  return (
    <section className={categories.wrapper}>
      <h1>Интернет магазин садовой и строительной техники</h1>
      <h2>Бесплатная доставка по всей территории Республики Беларусь</h2>
      <div className={categories.items}>
        {
          cardData.map(({ imgSrc, title, url }) => <CatalogCard imgSrc={imgSrc} title={title} url={url} /> )
        }
      </div>
    </section>
  )
}

export default ProductCategories;