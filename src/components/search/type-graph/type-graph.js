import React, { PureComponent } from 'react';
import style from './type-graph.module.css';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';//подключаем библиотеку для отрисовки графиков жанра литературы

// создаем компонент для отображения графика жанра
export default class TypeGraph extends PureComponent {
  render() {
    return (
      <div className={style.type_graph}>
       <div> 
          <h2>График зависимости использования слов от типа литературы</h2>
       </div>
       <div>
        <BarChart
          width={600}
          height={300}
          data={this.props.typeData}
          margin={{
            top: 5, right: 0, left: 0, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" />
          {
          <YAxis label={{value:'кол-во слов', angle:-90, position: 'insideLeft'}} />
          // <YAxis label={{value:'кол-во слов', angle:-90, position: 'outsideLeft'}} />
          }
          <Tooltip />
          <Bar name='кол-во слов' dataKey="count" stackId="a" fill="#8884d8" />
        </BarChart>
       </div>
      </div>
    );
  }
}
