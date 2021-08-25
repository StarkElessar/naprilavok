import React from 'react';
import phoneModal from './style.css';
// import { NavLink } from 'react-router-dom';

const PhoneLink = () => {
   return (
      <div className={phoneModal.body}>
         <span className={phoneModal.screen}>
            <i class="fas fa-phone-volume"></i>
         </span>
      </div>
   )
}

export default PhoneLink;