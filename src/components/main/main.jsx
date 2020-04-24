import React from 'react';
import style from './main.module.css';
import SearchWord from './search-word/search-word';

const Main=()=>{
  return(
        <div className={style.main}>
          <h1>Главная</h1>
          <SearchWord />
        </div>
  )
};
export default Main;


