import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './navbar.module.css';

const Navbar=()=>{
  return(
        <div className={style.navbar}>
          <NavLink to='/'>Главная</ NavLink>
          |
          <NavLink to='/search'>Поиск </NavLink>
          |
          <NavLink to='/add'> Добавление данных</NavLink>
        </div>
  )
};

export default Navbar;
