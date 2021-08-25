import React from 'react';
import promoForm from './style.module.css';
// import { NavLink } from 'react-router-dom';
import MainForm from './../../../../common/collection-forms/main-form';

const PromoForm = () => {
  return (
    <section className={promoForm.wrapper}>
      <div className={promoForm.row}>
        <h2 className={promoForm.title}>Долгие поиски не принесли результатов?</h2>
        <div className={promoForm.body}>
          <div className={promoForm.column}>
            <div className={promoForm.item}>
              <div className={promoForm.icon}>
                <i aria-hidden="true" class="fas fa-american-sign-language-interpreting"></i>
              </div>
              <div className={promoForm.text}>
                <h3>Официальный представитель.</h3>
                <p>Все товары лучшие в своей ценовой категории. Официальные поставщики SHTENLI и PROFI в Беларуси.</p>
              </div>
            </div>
            <div className={promoForm.item}>
              <div className={promoForm.icon}>
                <i class="fas fa-luggage-cart"></i>
              </div>
              <div className={promoForm.text}>
                <h3>Доставка с любую точку Беларуси.</h3>
                <p>Своя курьерская служба. Курьер заинтересован доставить товар в целосности.</p>
              </div>
            </div>
            <div className={promoForm.item}>
              <div className={promoForm.icon}>
                <i class="fas fa-certificate"></i>
              </div>
              <div className={promoForm.text}>
                <h3>Весь товар сертифицирован и имеет гарантию.</h3>
                <p>Только официальные поставщики и производители товаров, такие как: Германия, Польша, Россия.</p>
              </div>
            </div>
          </div>
          <div className={promoForm.column}>
            <MainForm />
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureItem = ({ title, description }) => {
  return (
    <div className={promoForm.item}>
      <div className={promoForm.icon}>
        <i aria-hidden="true" class="fas fa-american-sign-language-interpreting"></i>
      </div>
      <div className={promoForm.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PromoForm;