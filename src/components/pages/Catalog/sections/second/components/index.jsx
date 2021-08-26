import React from 'react';
import promoForm from './../promoForm.module.css';

const FeatureItem = ({ iconClass, title, description }) => {
  return (
    <div className={promoForm.item}>
      <div className={promoForm.icon}>
        <i class={iconClass}></i>
      </div>
      <div className={promoForm.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem;