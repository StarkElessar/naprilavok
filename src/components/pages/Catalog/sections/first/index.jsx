import React from 'react';
import categories from './styles.module.css';
import { NavLink } from 'react-router-dom';
import green from './img/greenhouses.jpg';
import pavilion from './img/pavilion.jpg';
import mowers from './img/mowers.jpg';
import chainsaw from './img/chainsaw.jpg';
import welding from './img/welding-machine.jpg';
import showers from './img/showers.jpg';

const cardData = [
  { imgSrc: green, title: 'Теплицы', url: '/greenhouses' },
  { imgSrc: pavilion, title: "Беседки", url: "/pavilion" },
  { imgSrc: mowers, title: "Бензокосы", url: "/mowers" },
  { imgSrc: chainsaw, title: "Бензопилы", url: "/chainsaw" },
  { imgSrc: welding, title: "Сварочные аппараты", url: "/welding" },
  { imgSrc: showers, title: "Летние души", url: "/showers" }
];

const ProductCategories = () => {
  return(
    <section className={categories.wrapper}>
      <h1>Интернет магазин садовой и строительной техники</h1>
      <h2>Бесплатная доставка по всей территории Республики Беларусь</h2>
      <div className={categories.items}>
        {cardData.map(({ imgSrc, title, url }) => <CatalogCard imgSrc={imgSrc} title={title} url={url} />)}
      </div>
    </section>
  )
}

const CatalogCard = ({ imgSrc, title, url }) => {
  return (
    <div className={categories.item}>
      <img src={imgSrc} alt="Showers" />
      <div className={categories.item__body}>
        <NavLink to={url}>{title}</NavLink>
        <NavLink to={url} className={categories.item__button}>Перейти</NavLink>
      </div>
    </div>
  );
};

export default ProductCategories;