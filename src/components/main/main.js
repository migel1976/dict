import React from 'react';//подключаем библотеку React
import style from './main.module.css';
import ExportCSV from './export_csv';
import * as axios from 'axios';//подключаем библиотеку для работы с HTTP-запросами

//создаем компонент для выгрузки 
export default class Main extends React.Component{
	constructor(props) {
    super(props);
	this.state={
		data:[],
		nameData:[],
		selectedOption: this.props.selectList.selectedOption,
		options: this.props.selectList.options,
		filename:''
	};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   };

  handleChange(event) {
	  debugger;
	  this.setState({selectedOption: event.target.value});
	  const name=event.target.value+'.csv';
	  this.setState({filename:name}); 
	  const symbol=event.target.value;
	  
		axios.get('list/?find='+symbol)
		.then(res=>{
			console.log(res.data);
			this.setState({data:res.data});
			this.analizeName();
		});

  }

  handleSubmit(event) {
		const symbol=this.state.selectedOption;	
		axios.get('list/?find='+symbol)
		.then(res=>{
			console.log(res.data);
			this.setState({data:res.data});
			this.analizeName();
		});
    event.preventDefault();
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
	  const list=this.state.nameData.map((el)=>(<p>{el.name+'\n'}</p>));
	  return(
        <div className={style.main} >
		  <form>
		  <div className="form-group">
          <select value={this.state.selectedOption} onChange={this.handleChange}
			<option selected default>Выберите букву</option>
          </select>
		  </div>
		  </form>
		  <ExportCSV csvData={this.state.nameData} fileName={this.state.filename} />
        </div>
	  )
	}
};

