import React from 'react';//подключаем библотеку React
import * as axios from 'axios';//подключаем библиотеку для работы с HTTP-запросами
import style from './add-book.module.css';//подключаем файл css
// import ComboBox from '../combo-box/combo-box';

//cоздаем компонент для добавления книг
class AddBook extends React.Component{
    //определяем хранилище данных 
    state={
            type:'поэзия',//переменная в которой хранятся данные о жанре произведения
            year:1917,//переменная в которой хранятся данные о годе издания книги
            filePath:'',//переменная в которой хранится путь до файла где сохранена книга на сервере
            successLoadData:'',
            flagSaveFile:true//флаг успешного сохранения книги на сервер
    };
    // записываем год издания в переменную
    changeYear=(e)=>{
      this.setState({year:e.target.value})
    };
    // заносим жанр в переменную
    changeType=(e)=>{
      this.setState({type:e.target.value})
    };
    
    // обработчик записи книг на сервер
    sendBookInfo=(e)=>{
      e.preventDefault();
      this.setState({flagSaveFile:false});
      // вызоваем обработчик записи книг на сервере
      axios.post('book/upload_book_to_db',{year:this.state.year,
                                           type:this.state.type,
                                           filePath:this.state.filePath})
      .then(res=>{
      // получаем ответ от сервера, что запись прошла успешно
                  console.log(res);
                  this.setState({successLoadData:res.data,
                                 filePath:'',
                                 flagSaveFile:true});
                  console.log('sendBookInfo',this.state.filePath);  
                  });
    };
    // обработчик сохранения книг на сервере  
    fileUpload=(e)=>{
      const file=e.target.files[0];//получаем имя файла из текстового поля формы
      const formData=new FormData();
      formData.append('file',file);//формируем данные для отправки на сервер

      // вызываем обработчик сохранения книг на сервере
      axios.post('book/upload_book_to_server',formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      }).then(res=>{
        // получаем ответ от сервера, что сохранение прошло успешно
            console.log(res.data);
            this.setState({
              filePath:res.data,
              successLoadData:'',
            });
             }
      )
    };

    render(){
      return(
            <div className={style.add_book}>
              <h2>Добавление книг в словарь</h2>
               {/*создаем форму для сохранения книг*/}
              <form onSubmit={this.sendBookInfo}>
               <div><input placeholder='Год Издания'
                            value={this.state.year}
                            onChange={this.changeYear}
                            /></div>
                <div><input placeholder='Вид литературы'
                            value={this.state.type}
                            onChange={this.changeType}
                            /></div>
                <div><input type='file'
                            onChange={this.fileUpload}
                      />
                </div>
                <div><input type='submit' value='Загрузить'/></div>
              </form>
              <div>
                    {!this.state.flagSaveFile?<h2>Подождите данные загружаются на сервер...</h2>
                      :<h2/>
                    }
              </div>
              <div><h1>{this.state.successLoadData}</h1></div>
              <div><h1>{this.state.filePath}</h1></div>
            </div>
      )
    }
};
export default AddBook;


