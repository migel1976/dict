import React from 'react';
import style from './add-book.module.css';

const AddBook=()=>{
      return(
            <div className={style.add_book}>
              <h2>Добавление книг в словарь</h2>
              <form>
                <div><input placeholder='Год Издания' /></div>
                <div><input placeholder='Вид литературы' /></div>
                <div><input type='submit' value='Загрузить'/></div>
              </form>
            </div>
      )
};
export default AddBook;


