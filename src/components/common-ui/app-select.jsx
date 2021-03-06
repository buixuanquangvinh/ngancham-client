import React, { Component } from 'react'

export default class AppSelect extends Component{

	componentDidMount(){
		const { name, value, options, onChange } = this.props
		if(!value && options.length)
			onChange({ 
				target:{
					name:name,
					value:options[0].value
				} 
			})
	}

	render(){
		const { label, options, onChange, compact } = this.props
		if(compact)
			return(
			  	<select className="custom-select" {...this.props}>
			  	{options.map((option)=>{
			  		return <option key={option.value} value={option.value}>{option.label}</option>
			  	})}
				</select>
			)
		else
			return(
				<div className="input-group">
				  	<div className="input-group-prepend">
				    	<span className="input-group-text">{label}</span>
				  	</div>
				  	<select className="custom-select" {...this.props}>
				  	{options.map((option)=>{
				  		return <option key={option.value} value={option.value}>{option.label}</option>
				  	})}
					</select>
				</div>
			)
	}
}