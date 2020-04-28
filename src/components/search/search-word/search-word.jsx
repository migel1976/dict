import React from 'react';
import style from './search-word.module.css';
import * as axios from 'axios';

export default class SearchWord extends React.Component{
  state={
          search:'противъ',
//          dataWord:[]
  };
  changeSearch=(e)=>{
    this.setState({
      search:e.target.value
    })
  };

  searchWord=(e)=>{
    e.preventDefault();
    axios.post('search_by_word',{search:this.state.search})
    .then(res=>{
      console.log('searchWord',res)
      //this.setState({dataWord:res.data})  
      this.props.updateData(res.data);
    }
    )
  };

  render(){
    return(
            <div className={style.search_word}>
              <form onSubmit={this.searchWord}>
                <div>
                  <input placeholder='поиск' 
                          value={this.state.search}
                          onChange={this.changeSearch}
                  />
                  <input type='submit' value='найти' />
                </div>
              </form>
           </div>
    )
  }
};
