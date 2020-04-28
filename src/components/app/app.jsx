import React from 'react';
import style from './app.module.css';
import {Route} from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Main from '../main/main';
import AddBook from '../add-book/add-book';

  const App=()=>{
    return(
      <div className={style.app}>
        <Header />
        <Navbar />
        <div className={style.app_content}>
          <Route path='/search' render={()=>(<Main />)}/>
          <Route path='/add' render={()=>(<AddBook />)}/>
      {/* <Route path='/' render={()=>(<MainPage />)}/> */}
        </div>
      </div>
    )
  };

export default App;
