import React from 'react';
import '../../assets/fonts/fonts.css';
import style from './app.module.css';
import {Route} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Search from '../search/search';
import AddBook from '../add-book/add-book';
import Main from '../main/main';

  const App=()=>{
    return(
      <div className={style.app}>
        <Header />
        <Navbar />
        <div className={style.app_content}>
          <Route path='/search' render={()=>(<Search />)}/>
          <Route path='/add' render={()=>(<AddBook />)}/>
          <Route exact path='/' render={()=>(<Main />)}/> 
        </div>
      </div>
    )
  };

export default App;
