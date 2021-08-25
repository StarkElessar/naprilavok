import React from 'react';
import footer from './footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
   return (
      <footer className={footer.wrapper}>

         <div className={footer.row}>

            <div className={footer.col}>
               <h5>ИП Коробкин О.Е.</h5>
               <h5>УНП: 192693197</h5>
               <a href="https://yandex.by/maps/-/CCUeJOuxKA">
                  г. Минск, пр-т Рокоссовского 41/254
               </a>
               <h5>Сервисный центр:</h5>
               <a href="https://yandex.by/maps/-/CCUeJKwPgC">
                  г. Минск, ул. Медвежино 10
               </a>
            </div>
            <div className={footer.col}>
               <h5>Полезные ссылки:</h5>
               <ul>
                  <li><NavLink to='/catalog' activeClassName={footer.activeLink}>Главный каталог</NavLink></li>
                  <li><NavLink to='/greenhouses' activeClassName={footer.activeLink}>Теплицы</NavLink></li>
                  <li><NavLink to='/pavilion' activeClassName={footer.activeLink}>Беседки</NavLink></li>
                  <li><NavLink to='/mowers' activeClassName={footer.activeLink}>Бензокосы</NavLink></li>
                  <li><NavLink to='/chainsaw' activeClassName={footer.activeLink}>Бензопилы</NavLink></li>
                  <li><NavLink to='/welding_machine' activeClassName={footer.activeLink}>Сварочные аппараты</NavLink></li>
                  <li><NavLink to='/showers' activeClassName={footer.activeLink}>Летние души</NavLink></li>
               </ul>
            </div>
            <div className={footer.col}>
               <a href="tel:+375255228110" className="">
                  +375 (25) 522-81-10
               </a>
               <a href="mailto:feedback-mail@naprilavok.by">feedback-mail@naprilavok.by</a>
               <p className={footer.blockInfo__timetable}>Мы работаем с 8:30 до 23:00</p>
            </div>

         </div>

      </footer>
   )
};

export default Footer;