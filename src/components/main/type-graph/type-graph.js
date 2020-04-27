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
          width={500}
          height={300}
          data={this.props.typeData}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" stackId="a" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}
