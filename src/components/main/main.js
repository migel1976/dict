import React from 'react';
import style from './main.module.css';
import * as axios from 'axios';

export default class Main extends React.Component{
	state={
		data:[],
		nameData:[]
	};

	componentDidMount=()=>{
		axios.get('list/?find=а')
		.then(res=>{
			console.log(res.data);
			this.setState({data:res.data});
			this.analizeName();
		});
	};

  analizeName=()=>{
      const reduced = this.state.data.reduce(function(m, d){
          if(!m[d.name]){
            m[d.name] = {...d, count: d.count};
            return m;
          }
          m[d.name].count+= d.count;
          return m;
       },{});
        const result = Object.keys(reduced).map(function(k){
           const item  = reduced[k];
           return {
                name:item.name,
                count:item.count
           }
       })
          console.log('analizeName is ', result);
          this.setState({nameData:[...result]});
  }

		

	render(){
	  const list=this.state.nameData.map((el)=>(<div>{el.name}</div>));
	  return(
        <div className={style.main} >
          {/*<h1>Нужно что то вставить про цели этого словаря</h1>*/}
		  {/*<button onClick={this.analizeName}>нажми меня</button>*/}
		  {list}		  
        </div>
	  )
	}
};

