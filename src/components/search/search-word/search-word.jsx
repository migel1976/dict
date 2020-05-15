import React from 'react';//подключаем библотеку React
import style from './search-word.module.css';//подключаем файл сss
import * as axios from 'axios';//подключаем библиотеку для работы с http запросами

// компонент который предназначен для поиска слова
export default class SearchWord extends React.Component{
//определяем хранилище данных 
  state={
          search:'',//строка поиска
          flagSearch:false//флаг поиска
  };
// изменяем переменную в которой хранится  строкa поиска
  changeSearch=(e)=>{
    this.setState({
      search:e.target.value
    })
  };

  // функция поиска строки в БД 
  searchWord=(e)=>{
    e.preventDefault();
    // производим вызов обработчика на сервере и передаем строку поиска
    axios.post('search_by_word',{search:this.state.search})
    .then(res=>{
      // получаем ответ от сервера и сохраняем полученные данные в массив
      console.log('searchWord',res)
      res.data.length!==0 && res.data[0].count!==0?
        this.setState({flagSearch:false})
        : this.setState({flagSearch:true})
      this.props.updateData(res.data);
    }
    )
  };

  render(){
    return(
            <div className={style.search_word}>
              {/*создаем форму для отправки данных на сервер*/}
              <form onSubmit={this.searchWord}>
                <div>
                  <input placeholder='поиск' 
                          value={this.state.search}
                          onChange={this.changeSearch}
                  />
                  <input type='submit' value='найти' />
                </div>
              </form>
              <div className={style.find}>
                  {this.state.flagSearch?<h2>Слово не найдено</h2>:<></>}
              </div>
           </div>
    )
  }
};
