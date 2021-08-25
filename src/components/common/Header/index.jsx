import React from 'react';
import { NavLink } from 'react-router-dom';
import header from './style.module.css';
import logo from './../../../img/logo/logo.svg';
import MainBtn from './../../buttons';

const Header = (props) => {
  return (
    <header className={header.wrapper}>
      <div className={header.row}>
        <NavLink to='/catalog'>
          <div className={header.logo}>
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <div className={header.blockInfo}>
          <div className={header.blockInfo__time}>
            <a href="tel:+375255228110" className={`${header.mainPhone} ${header.blockInfo__phone}`}>
              <i className="fas fa-mobile"></i>
              <span>+375 (25) 522-81-10</span>
            </a>
            <span className={header.blockInfo__timetable}>
              Мы работаем с 8:30 до 23:00
            </span>
          </div>
          <MainBtn text="Заказать звонок" />
        </div>
      </div>
    </header>
  );
};

export default Header;