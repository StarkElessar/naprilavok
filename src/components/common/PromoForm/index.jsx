import React from 'react';
import promoForm from './style.css';
import { NavLink } from 'react-router-dom';
import MainForm from './../collection-forms/main-form';

const PromoForm = () => {
   return (
      <section className={promoForm.wrapper}>
         <h2 className={promoForm.title}>Долгие поиски не принесли результатов?</h2>
         <div className={promoForm.body}>
            <div className={promoForm.column}>
               <div className="promo__item">
                  <div className="promo__item-icon">
                     <i aria-hidden="true" className="fas fa-american-sign-language-interpreting"></i>
                  </div>
                  <div className="promo__item-text">
                     <h3>Официальный представитель.</h3>
                     <p>Все товары лучшие в своей ценовой категории. Официальные поставщики SHTENLI и PROFI в Беларуси.</p>
                  </div>
               </div>
               <div className="promo__item">
                  <div className="promo__item-icon">
                     <i className="fas fa-luggage-cart"></i>
                  </div>
                  <div className="promo__item-text">
                     <h3>Доставка с любую точку Беларуси.</h3>
                     <p>Своя курьерская служба. Курьер заинтересован доставить товар в целосности.</p>
                  </div>
               </div>
               <div className="promo__item">
                  <div className="promo__item-icon">
                     <i className="fas fa-certificate"></i>
                  </div>
                  <div className="promo__item-text">
                     <h3>Весь товар сертифицирован и имеет гарантию.</h3>
                     <p>Только официальные поставщики и производители товаров, такие как: Германия, Польша, Россия.</p>
                  </div>
               </div>
            </div>
            <div className={promoForm.column}>
               <MainForm />
            </div>
         </div>
      </section>
   )
}

export default PromoForm;