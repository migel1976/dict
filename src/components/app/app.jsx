import React from 'react';//подключаем библотеку React
import '../../assets/fonts/fonts.css';//подключаем шрифты
import style from './app.module.css';//подключаем файл css
import {Redirect, Route} from 'react-router-dom';//подключаем библиотеку для обработки маршрутов
import Navbar from '../navbar/navbar';//подключаем компонент отвечающий за создание меню
import Header from '../header/header';//подключаем компонент отвечающий за создание заголовка
import Search from '../search/search';//подключаем компонент отвечающий за отображение  страницы поиска на странице 
import AddBook from '../add-book/add-book';//подключаем компонент отвечающий за отображение страницы добавления книг 
// import Main from '../main/main';
  //создаем основной компонент который в который загружается все дочерние компоненты
  const App=()=>{
    return(
      <div className={style.app}>
        {/*вызываем компонент который отображает заголовок*/}
        <Header />
           {/*вызываем компонент который отображает меню*/}
        <Navbar />

        <div className={style.app_content}>
          {/*вызываем компонент, который отображает страницу поиска*/}
          <Route path='/search' render={()=>(<Search />)}/>

          {/*вызываем компонент, который отображает страницу добавления книг*/}
          <Route path='/add' render={()=>(<AddBook />)}/>

          <Route exact path='/' render={()=>(<Redirect to='/search' />)}/> 
          {/*<Route exact path='/' component={()=>(<Main />)}/> */}
        </div>
      </div>
    )
  };

export default App;
