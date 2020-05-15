import React from 'react';//подключаем библотеку React
import style from './search.module.css';//подключаем файл css
import SearchWord from './search-word/search-word';//форма для поиска слова
import TimeGraph from './time-graph/time-graph';//график времени 
import TypeGraph from './type-graph/type-graph';//график типа издания
import TextExample from './text-example/text-example';//вывод примеры использования слов
import TextInfo from './text-info/text-info';//вывод найденного слова

export default class Search extends React.Component{
//определяем хранилище данных 
  state={
          data:[],//массив в котором содержаться найденые слова
          timeData:[],//массив в котором содержаться данные для отображения графика времени
          typeData:[],//массив в котором содержаться данные для отображения графика жанра слова
			// nameData:[],//массив в котором содержаться найденые слова
          flagSearch:true//флаг используется при поиске слова
  };

//функция обновления хранилища данных
  updateData=(newdata)=>{
    this.setState({
      data:[...newdata]
    })
  this.analizeTime();
  this.analizeType();  
  };

	// производим выборку данных для построения графика времен 
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

	// производим выборку данных для построения графика жанра
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
        <div className={style.search}>
			{/*вызываем компонент который отображает форму поиска*/}
          <SearchWord flagSearch={this.state.flagSearch} data={this.state.data} updateData={this.updateData}/>
          {this.state.data.length!==0 && this.state.data[0].count!==0?
            <>
			  {/*вызываем компонент который отображает график времени*/}
              <TimeGraph timeData={this.state.timeData}/>

			  {/*вызываем компонент который отображает график жанра*/}
              <TypeGraph typeData={this.state.typeData}/>
			  
			  {/*вызываем компонент который отображает список примеров слов */}
              <TextExample data={this.state.data} />
			  
			  {/*вызываем компонент который отображает найденное слово*/}
              <TextInfo data={this.state.data} />
            </>
            :
            <>
            </>
          }
        </div>
  )
}
};


