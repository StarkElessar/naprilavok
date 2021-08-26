import React from "react";
import { NavLink } from 'react-router-dom';
import categories from './../categories.module.css'

const CatalogCard = ({ imgSrc, title, url }) => {
  return (
    <div className={categories.item}>
      <img src={imgSrc} alt="Showers" />
      <div className={categories.item__body}>
        <NavLink to={url}>{title}</NavLink>
        <NavLink to={url} className={categories.item__button}>Перейти</NavLink>
      </div>
    </div>
  )
}

export default CatalogCard;