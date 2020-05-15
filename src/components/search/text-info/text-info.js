import React from 'react';//подключаем библотеку React
import style from './text-info.module.css';

// создаем компонент для отображения найденного слова
const TextInfo=(props)=>{
  if(props.data.length!==0){
    console.log('text-info',props.data[0].name);
  }
  return(
          <div className={style.text_info}>
            {/*<h1>{props.data.length!==0?props.data[0].name:''}</h1>*/}
			<h1>{props.data.length!==0
				? 
				    props.data[0].name
				 :''}</h1>
          </div>
  )

};
export default TextInfo;

