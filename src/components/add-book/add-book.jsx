import React from 'react';
import * as axios from 'axios';
import style from './add-book.module.css';
import ComboBox from '../combo-box/combo-box';

class AddBook extends React.Component{
    state={
            type:'поэзия',
            year:1917,
            filePath:'',
            successLoadData:''
    };
    getPage=()=>{
      axios.get('book/upload_book_to_db')
     // axios.get('http://localhost:3001/book/upload_book_to_db')
      .then(res=>console.log(res));
    };    
   
    fileUpload=(e)=>{
      const file=e.target.files[0];
      const formData=new FormData();
      formData.append('file',file);
      axios.post('book/upload_book_to_server',formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      }).then(res=>{
            console.log(res.data);
            this.setState({filePath:res.data});
             }
      )
    };



    render(){
      return(
            <div className={style.add_book}>
              <h2>Добавление книг в словарь</h2>
              <form>
                <div><input placeholder='Год Издания' /></div>
                <div><input placeholder='Вид литературы' /></div>
                <div><input type='file'
                            onChange={this.fileUpload}
                      />
                </div>
                <div><input type='submit' value='Загрузить'/></div>
              </form>
              <div><button onClick={this.getPage} /></div>
              <div><h1>{this.state.filePath}</h1></div>
            </div>
      )
    }
};
export default AddBook;


