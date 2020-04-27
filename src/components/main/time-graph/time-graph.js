import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class TimeGraph extends React.Component{

 render(){  
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
