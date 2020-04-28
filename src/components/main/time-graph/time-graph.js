import React from 'react';
import style from './time-graph.module.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class TimeGraph extends React.Component{

 render(){  
     return( 
       <div className={style.time_graph}>
          <LineChart width={600} height={300} data={this.props.timeData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line name='кол-во слов' type="monotone" dataKey="count" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            {/*<XAxis dataKey="year" label={{ value: 'Года', position: 'insideBottomRight', offset: 0 }}/>*/}
             <XAxis dataKey='year' label={{value:'Время'}} />
            <YAxis label={{value:'кол-во слов', angle:-90, position: 'insideLeft'}} />
            <Tooltip/>
          </LineChart>
       </div>
     )
 }
};

export default TimeGraph;
