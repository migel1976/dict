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
     //timeData:[]
     // graphArray:[],
     // typeArray:[]
   };
   
   componentDidMount=()=>{
     // this.analizeTime();
   };
  
   componentDidUpdate(prevProps,prevState){

     //debugger;
     //if(this.state.timeData!==prevState.timeData){
     //  //this.prepareData();
     //  this.analizeTime();
     // }
   };
  
   prepareData=()=>{
      this.setState({
        graphArray:this.props.data,
        // typeArray:[...this.props.data.map((e)=>(
        //                                        <div><p>{e.year}</p><p>{e.name}</p></div>))]
       })
   };
  
 // analizeTime=()=>{
 //      // const reduced = this.state.graphArray.reduce(function(m, d){
 //      const reduced = this.props.data.reduce(function(m, d){
 //          if(!m[d.year]){
 //            m[d.year] = {...d, count: d.count};
 //            return m;
 //          }
 //          m[d.year].count+= d.count;
 //          return m;
 //       },{});
 //        const result = Object.keys(reduced).map(function(k){
 //           const item  = reduced[k];
 //           return {
 //                year:item.year,
 //                count:item.count
 //           }
 //       })
 //          console.log('result year is', result);
 //       this.setState({timeData:[...result]});
 //  }



  analizeType=()=>{
      const reduced = this.props.data.reduce(function(m, d){
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
 //console.log('props.data_in_time-graph', this.props.data);
 return( 
   <div>
      <LineChart width={600} height={300} data={this.props.timeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
      </LineChart>
   </div>
 )
 }
};

export default TimeGraph;
