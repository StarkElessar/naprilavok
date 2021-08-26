import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const MenuLink = ({ url, title }) => {
  return (
    <li>
      <NavLink to={url} activeClassName={styles.activeLink}>
        {title}
      </NavLink>
    </li>
  );
};

const Footer = ({ linkData }) => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.col}>
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
        <div className={styles.col}>
          <h5>Полезные ссылки:</h5>
          <ul>
            {linkData.map(({ url, title }) => <MenuLink url={url} title={title} />)}
          </ul>
        </div>
        <div className={styles.col}>
          <a href="tel:+375255228110" className="">
            +375 (25) 522-81-10
          </a>
          <a href="mailto:feedback-mail@naprilavok.by">feedback-mail@naprilavok.by</a>
          <p className={styles.blockInfo__timetable}>Мы работаем с 8:30 до 23:00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;