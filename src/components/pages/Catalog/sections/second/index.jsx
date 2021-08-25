import React from 'react';
import promoForm from './style.module.css';
// import { NavLink } from 'react-router-dom';
import MainForm from './../../../../common/collection-forms/main-form';

const PromoForm = (props) => {
  return (
    <section className={promoForm.wrapper}>
      <div className={promoForm.row}>
        <h2 className={promoForm.title}>Долгие поиски не принесли результатов?</h2>
        <div className={promoForm.body}>
          <div className={promoForm.column}>

            {itemsData.map(({ nameClass, title, description }) => <FeatureItem nameClass={nameClass} title={title} description={description} /> ) }

          </div>
          <div className={promoForm.column}>
            <MainForm />
          </div>
        </div>
      </div>
    </section>
  )
}

const FeatureItem = ({ nameClass, title, description }) => {
  return (
    <div className={promoForm.item}>
      <div className={promoForm.icon}>
        <i class={nameClass}></i>
      </div>
      <div className={promoForm.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

const itemsData = [
  { nameClass: "fas fa-american-sign-language-interpreting", title: "Официальный представитель.", description: "Все товары лучшие в своей ценовой категории. Официальные поставщики SHTENLI и PROFI в Беларуси." },
  { nameClass: "fas fa-luggage-cart", title: "Доставка с любую точку Беларуси.", description: "Своя курьерская служба. Курьер заинтересован доставить товар в целосности." },
  { nameClass: "fas fa-certificate", title: "Весь товар сертифицирован и имеет гарантию.", description: "Только официальные поставщики и производители товаров, такие как: Германия, Польша, Россия." },
]

export default PromoForm;