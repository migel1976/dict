import React from 'react';
import style from './search.module.css';
import SearchWord from './search-word/search-word';
import TimeGraph from './time-graph/time-graph';
import TypeGraph from './type-graph/type-graph';
import TextExample from './text-example/text-example';
import TextInfo from './text-info/text-info';

export default class Search extends React.Component{
  state={
          data:[],
          timeData:[],
          typeData:[],
			nameData:[],
          flagSearch:true
  };

  // componentDidMount=()=>{
  //    this.updateData(

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
	
  analizeName=()=>{
      const reduced = this.state.data.reduce(function(m, d){
          if(!m[d.name]){
            m[d.name] = {...d, count: d.count};
            return m;
          }
          m[d.name].count+= d.count;
          return m;
       },{});
        const result = Object.keys(reduced).map(function(k){
           const item  = reduced[k];
           return {
                name:item.name,
                count:item.count
           }
       })
          console.log('analizeName is ', result);
          this.setState({typeData:[...result]});
  }


  render(){
  return(
        <div className={style.search}>
          <SearchWord flagSearch={this.state.flagSearch} data={this.state.data} updateData={this.updateData}/>
          {this.state.data.length!==0 && this.state.data[0].count!==0?
            <>
              <TimeGraph timeData={this.state.timeData}/>
              <TypeGraph typeData={this.state.typeData}/>
              <TextExample data={this.state.data} />
              <TextInfo data={this.state.data} />
            </>
            :
            <>
            </>
          }
	  {/*<button onClick={this.analizeName}>name</button>*/}
        </div>
  )
}
};


