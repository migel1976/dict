import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './navbar.module.css';

const Navbar=()=>{
  return(
        <div className={style.navbar}>
          <div><NavLink to='/search'>Поиск</NavLink></div>
          <div><NavLink to='/add'>Добавление данных</NavLink></div>
        </div>
  )
};

export default Navbar;
