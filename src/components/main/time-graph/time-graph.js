import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class TimeGraph extends React.Component{
  data = [
      {year: '1991', uv: 400, pv: 2400, amt: 2400},
      {year: '1992', uv: 500, pv: 2400, amt: 2400},
      {year: '1993', uv: 600, pv: 2400, amt: 2400},
      {year: '1994', uv: 700, pv: 2400, amt: 2400},
      {year: '1995', uv: 800, pv: 2400, amt: 2400},
      {year: '1996', uv: 900, pv: 2400, amt: 2400},
  ];
   state={
     graphArray:[],
     typeArray:[]
   };
  
   componentDidUpdate(prevProps){
     // debugger;
     if(this.state.graphArray!==prevProps.data){
       this.prepareData();
      }
   };
  
   prepareData=()=>{
    // debugger;
    //let array=this.props.data;
    //if(array){ 
      this.setState({
        //graphArray:[...array.map((e)=>e.year)]
        graphArray:this.props.data,
        typeArray:[...this.props.data.map((e)=>(
                                                <div><p>{e.year}</p><p>{e.name}</p></div>))]
       })
   };
  
  // reduced = this.state.graphArray.reduce(function(m, d){
  //   debugger;
  //   if(!m[d.type]){
  //     m[d.type] = {...d, count: 1};
  //     return m;
  //   }
  //   m[d.type].count+= d.count;
  //   // m[d.team].ast += d.ast;
  //   // m[d.team].reb += d.reb;
  //   // m[d.team].count += 1;
  //   return m;
 // },{});

  // result = Object.keys(this.reduced).map(function(k){
  //    const item  = this.reduced[k];
  //    return {
  //         type:item.type,
  //         count:item.count
  //        // team: item.team,
  //        // ast: item.ast/item.count,
  //        // pts: item.pts/item.count,
  //        // reb: item.reb/item.count
  //    }
 // })
 analizeYear=()=>{
      const reduced = this.state.graphArray.reduce(function(m, d){
          if(!m[d.year]){
            m[d.year] = {...d, count: d.count};
            return m;
          }
          m[d.year].count+= d.count;
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
  }



  analizePoem=()=>{
      this.analizeYear();

      const reduced = this.state.graphArray.reduce(function(m, d){
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
  }

 render(){  
 //this.prepareData();
 //console.log('this.graphArray', this.state.typeArray);
 console.log('props.data_in_time-graph', this.props.data);
 return( 
   <div>
      <LineChart width={600} height={300} data={this.props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <div><button onClick={this.analizePoem} >Преобразовать</button></div>
    {this.state.typeArray}
   </div>
 )
 }
};

export default TimeGraph;
