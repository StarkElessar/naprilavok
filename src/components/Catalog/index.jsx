import React from 'react';
import productCategories from './catalog.module.css';
import { NavLink } from 'react-router-dom';
import green from './img/product-card/greenhouses.jpg';
import pavilion from './img/product-card/pavilion.jpg';
import mowers from './img/product-card/mowers.jpg';
import chainsaw from './img/product-card/chainsaw.jpg';
import welding from './img/product-card/welding-machine.jpg';
import showers from './img/product-card/showers.jpg';

const Catalog = (props) => {
   return (
      <div className={productCategories.wrapper}>
         
         <h1>Интернет магазин садовой и строительной техники</h1>
         <h2>Бесплатная доставка по всей территории Республики Беларусь</h2>

         <div className={productCategories.items}>

            { cardData.map( ({ imgSrc, title, url }) => <CatalogCard imgSrc={imgSrc} title={title} url={url} />) }

         </div>

      </div>
   )
}

const CatalogCard = ({ imgSrc, title, url }) => {
   return (
      <div className={productCategories.item}>
         <img src={imgSrc} alt="Showers" />
         <div className={productCategories.item__body}>
            <NavLink to={url}>{title}</NavLink>
            <NavLink to={url} className={productCategories.item__button}>Перейти</NavLink>
         </div>
      </div>
   )
}

const cardData = [
   { imgSrc: green, title: "Теплицы", url: "/greenhouses" },
   { imgSrc: pavilion, title: "Беседки", url: "/pavilion" },
   { imgSrc: mowers, title: "Бензокосы", url: "/mowers" },
   { imgSrc: chainsaw, title: "Бензопилы", url: "/chainsaw" },
   { imgSrc: welding, title: "Сварочные аппараты", url: "/welding" },
   { imgSrc: showers, title: "Летние души", url: "/showers" }
]

export default Catalog;