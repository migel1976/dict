import React from 'react';//подключаем библотеку React
import {NavLink} from 'react-router-dom';//подключаем библиотеку для обработки маршрутов
import style from './navbar.module.css';//подключаем файл css

//cоздаем компонент для отображение меню
const Navbar=()=>{
  return(
        <div className={style.navbar}>
          {/*<NavLink to='/'>Главная</ NavLink>*/}
          {/*|*/}
          {/*определяем ссылку на страницу поиска*/}
          <NavLink to='/search'>Поиск </NavLink>
          |
          {/*определяем ссылку на страницу добавления книги*/}
          <NavLink to='/add'> Добавление данных</NavLink>
        </div>
  )
};

export default Navbar;
