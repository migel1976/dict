import React from 'react';
import style from './main.module.css';
import ExportCSV from './export_csv';
import * as axios from 'axios';

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

	// componentDidMount=()=>{
	// 	axios.get('list/?find=а')
	// 	.then(res=>{
	// 		console.log(res.data);
	// 		this.setState({data:res.data});
	// 		this.analizeName();
	// 	});
	// };
  handleChange(event) {
	  debugger;
	  this.setState({selectedOption: event.target.value});
	  const name=event.target.value+'.csv';
	  this.setState({filename:name}); 
	  
    // alert('Your favorite fruit is: ' + this.state.selectedOption);
	    // debugger;
		// const symbol=this.state.selectedOption;	
		const symbol=event.target.value;
	  
		// axios.get('list/?find=а')
		axios.get('list/?find='+symbol)
		.then(res=>{
			console.log(res.data);
			this.setState({data:res.data});
			this.analizeName();
		});

  }

  handleSubmit(event) {
    // alert('Your favorite fruit is: ' + this.state.selectedOption);
		const symbol=this.state.selectedOption;	
		// axios.get('list/?find=а')
		axios.get('list/?find='+symbol)
		.then(res=>{
			console.log(res.data);
			this.setState({data:res.data});
			this.analizeName();
		});
    event.preventDefault();
  };
	// const selectList = {
	// 	selectedOption : 'Mango',
	// 	options: ['Apple', 'Orange', 'Mango']
	// }

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
	  // const list=this.state.nameData.map((el)=>(<div className={style.main_list}>{el.name}</div>));
	  // const list=this.state.nameData.map((el)=>(<p className={style.main_list}>{el.name}</p>));
	  const list=this.state.nameData.map((el)=>(<p>{el.name+'\n'}</p>));
	  return(
        <div className={style.main} >
		  {/*<button onClick={this.analizeName}>нажми меня</button>*/}
		  {/*{list}		  */}
		  {/*<form onSubmit={this.handleSubmit}>*/}
		  <form>
		  <div className="form-group">
          {/*<label for="fruit">Выберите букву</label>*/}
          <select value={this.state.selectedOption} onChange={this.handleChange}
			>
			<option selected default>Выберите букву</option>
            { this.state.options.map((option) => <option>{option}</option>)}
			{/*isOptionDisabled={(option) => option.disabled === 'yes'}>*/}
          </select>
		  </div>
		  {/*<button type="submit" >Отобразить</button>*/}
		  </form>
		  <ExportCSV csvData={this.state.nameData} fileName={this.state.filename} />
		  {/*<div className={style.main_list}>*/}
			{/*{list}*/}
		  {/*</div>*/}
        </div>
	  )
	}
};

