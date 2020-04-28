import React, { PureComponent } from 'react';
import style from './type-graph.module.css';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class TypeGraph extends PureComponent {

  render() {
    return (
      <div className={style.type_graph}>
        <BarChart
          width={600}
          height={300}
          data={this.props.typeData}
          margin={{
            top: 5, right: 20, left: 0, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis label={{value:'кол-во слов', angle:-90, position: 'insideLeft'}} />
          <Tooltip />
          <Bar name='кол-во слов' dataKey="count" stackId="a" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}
