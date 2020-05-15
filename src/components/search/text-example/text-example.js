import React from 'react';//подключаем библотеку React
import style from './text-example.module.css';


// создаем компонент для отображения примеров вхождения слова в предложениях
const TextExample=(props)=>{
  const element=props.data.map(u=><li key={u._id}>{u.sentence}</li>);

  return(
        <div className={style.text_example}>
          <div>
              {/*{props.data.map((u)=><div>{u.name} {u.count} {u.type} {u.year} {u.sentence}</div>)}*/}
              <ul>
                  {element}
              </ul>
          </div>
        </div>
  )
};
export default TextExample;




