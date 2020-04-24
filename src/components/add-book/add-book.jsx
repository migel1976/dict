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
    changeYear=(e)=>{
      this.setState({year:e.target.value})
    };

    changeType=(e)=>{
      this.setState({type:e.target.value})
    };
  
    sendBookInfo=(e)=>{
      e.preventDefault();
      axios.post('book/upload_book_to_db',{year:this.state.year,
                                           type:this.state.type,
                                           filePath:this.state.filePath})
      .then(res=>{
                  console.log(res);
                  this.setState({successLoadData:res.data});
      })
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
              <div><h1>{this.state.successLoadData}</h1></div>
              <div><h1>{this.state.filePath}</h1></div>
            </div>
      )
    }
};
export default AddBook;


