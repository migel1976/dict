import React from 'react';//подключаем библотеку React
import style from './header.module.css';//подключаем файл css


//cоздаем компонент для отображение заголовка
const Header=()=>{
        return(
              <div className={style.header}>
                <h1>Дореформенный словарь</h1>
              </div>
        )
};
export default Header;
