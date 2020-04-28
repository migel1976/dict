import React from 'react';
import style from './main.module.css';
import SearchWord from './search-word/search-word';
import TimeGraph from './time-graph/time-graph';
import TypeGraph from './type-graph/type-graph';
import TextExample from './text-example/text-example';
import TextInfo from './text-info/text-info';

class Main extends React.Component{
  state={
          data:[],
          timeData:[],
          typeData:[]
  };

  updateData=(newdata)=>{
    this.setState({
      data:[...newdata]
    })
  this.analizeTime();
  this.analizeType();  
  };
  
  analizeTime=()=>{
      const reduced = this.state.data.reduce(function(m, d){
          if(!m[d.year]){
            m[d.year] = {...d, count: d.count};
            return m;
          }

          return m;
       },{});
        const result = Object.keys(reduced).map(function(k){
           const item  = reduced[k];
           return {
                year:item.year,
                count:item.count
           }
       })
          console.log('result year is', result);
       this.setState({timeData:[...result]});
  }

  analizeType=()=>{
      const reduced = this.state.data.reduce(function(m, d){
          if(!m[d.type]){
            m[d.type] = {...d, count: d.count};
            return m;
          }
          m[d.type].count+= d.count;
          return m;
       },{});
        const result = Object.keys(reduced).map(function(k){
           const item  = reduced[k];
           return {
                type:item.type,
                count:item.count
           }
       })
          console.log('result type is', result);
          this.setState({typeData:[...result]});
  }

  render(){
  return(
        <div className={style.main}>
          <SearchWord data={this.state.data} updateData={this.updateData}/>
          {this.state.data.length!==0?<>
          <TimeGraph timeData={this.state.timeData}/>
          <TypeGraph typeData={this.state.typeData}/>
          <TextExample data={this.state.data} />
          <TextInfo data={this.state.data} />
            </>
            :
            <h2>к сожалению искомое слово не найдено</h2>
          }
        </div>
  )
}
};
export default Main;


