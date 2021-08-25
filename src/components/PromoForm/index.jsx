import React from 'react';
import promoForm from './PromoForm.module.css';
import { NavLink } from 'react-router-dom';

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
               <form action="mail-telegram.php" name="main-form" method="POST">
                  <input type="hidden" name="utm_source" value="" />
                  <input type="hidden" name="utm_medium" value="" />
                  <input type="hidden" name="utm_campaign" value="" />
                  <input type="hidden" name="utm_content" value="" />
                  <input type="hidden" name="utm_term" value="" />
                  <h3>Заполните эту форму и получите консультацию в течении 5 минут</h3>
                  <p>Заполните поля ниже. За вашим телефоном закрепляется доступ к ценам со скидкой.</p>
                  <label for="user_name">
                     <input id="user_name" type="text" name="user_name" value="" placeholder="Ваше имя" required />
                  </label>
                  <label for="user_phone">
                     <input id="user_phone" type="tel" name="user_phone" value="" placeholder="+375 (" required />
                  </label>
                  <button type="submit" >Получить консультацию</button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default PromoForm;