import React from 'react';
import { NavLink } from 'react-router-dom';
import footer from './../footer.module.css';

const MenuLink = ({ url, title }) => {
  return (
    <li>
      <NavLink to={url} activeClassName={footer.activeLink}>
        {title}
      </NavLink>
    </li>
  );
};

export default MenuLink;
