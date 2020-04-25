import React from 'react';
import style from './main.module.css';
import SearchWord from './search-word/search-word';
import TimeGraph from './time-graph/time-graph';

class Main extends React.Component{
  state={
          data:[]
  };

  updateData=(newdata)=>{
    this.setState({
      data:[...newdata]
    })
  };

  render(){
  return(
        <div className={style.main}>
          <h1>Главная</h1>
          <SearchWord data={this.state.data} updateData={this.updateData}/>
          <TimeGraph data={this.state.data}/>
        </div>
  )
}
};
export default Main;


