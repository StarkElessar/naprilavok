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

            <div className={productCategories.item}>
               <img src={green} alt="Greenhouses"/>
               <div className={productCategories.item__body}>
                  <NavLink to='/greenhouses'>Теплицы</NavLink>
                  <NavLink to='/greenhouses' className={productCategories.item__button}>Перейти</NavLink>
               </div>
            </div>
               
            <div className={productCategories.item}>
               <img src={pavilion} alt="Pavilion"/>
                  <div className={productCategories.item__body}>
                  <NavLink to='/pavilion'>Беседки</NavLink>
                  <NavLink to='/pavilion' className={productCategories.item__button}>Перейти</NavLink>
                  </div>
            </div>
                  
            <div className={productCategories.item}>
               <img src={mowers} alt="Mowers"/>
                  <div className={productCategories.item__body}>
                  <NavLink to='/mowers'>Бензокосы</NavLink>
                  <NavLink to='/mowers' className={productCategories.item__button}>Перейти</NavLink>
                  </div>
            </div>
                     
            <div className={productCategories.item}>
               <img src={chainsaw} alt="Chainsaw"/>
                  <div className={productCategories.item__body}>
                  <NavLink to='/chainsaw'>Бензопилы</NavLink>
                  <NavLink to='/chainsaw' className={productCategories.item__button}>Перейти</NavLink>
                  </div>
            </div>
                        
            <div className={productCategories.item}>
               <img src={welding} alt="Welding-mashine"/>
               <div className={productCategories.item__body}>
                  <NavLink to='/welding_machine'>Сварочные аппараты</NavLink>
                  <NavLink to='/welding_machine' className={productCategories.item__button}>Перейти</NavLink>
               </div>
            </div>
                           
            <div className={productCategories.item}>
               <img src={showers} alt="Showers"/>
               <div className={productCategories.item__body}>
                  <NavLink to='/showers'>Летние души</NavLink>
                  <NavLink to='/showers' className={productCategories.item__button}>Перейти</NavLink>
               </div>
            </div>
                              
         </div>

      </div>
   )
}

export default Catalog;