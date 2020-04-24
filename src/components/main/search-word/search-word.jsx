import React from 'react';
import * as axios from 'axios';

export default class SearchWord extends React.Component{
  state={
          search:'введите',
          dataWord:[]
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
      this.setState({dataWord:res.data})  
    }
    )
  };

  render(){
    return(
            <div>
              <form onSubmit={this.searchWord}>
                <div>
                  <input placeholder='поиск' 
                          value={this.state.search}
                          onChange={this.changeSearch}
                  />
                  <input type='submit' value='найти' />
                </div>
              </form>
              <div>
                  {this.state.dataWord.map((u)=><div>{u.name} {u.count} {u.type} {u.year}</div>)}
              </div>
            </div>
    )
  }
};
