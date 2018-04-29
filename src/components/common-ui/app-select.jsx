import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class AppSelect extends Component{

	componentDidMount(){
		const { value, options, onChange } = this.props
		if(!value && options.length)
			onChange(options[0].value)
	}

	render(){
		const { label, value, options, onChange, compact } = this.props
		if(compact)
			return(
				<div className="mb-3">
				  	<select className="custom-select" value={value} onChange={(e)=>onChange(e.target.value)}>
				  	{options.map((option)=>{
				  		return <option key={option.value} value={option.value}>{option.label}</option>
				  	})}
					</select>
				</div>
			)
		else
			return(
				<div className="input-group mb-3">
				  	<div className="input-group-prepend">
				    	<span className="input-group-text">{label}</span>
				  	</div>
				  	<select className="custom-select" value={value} onChange={(e)=>onChange(e.target.value)}>
				  	{options.map((option)=>{
				  		return <option key={option.value} value={option.value}>{option.label}</option>
				  	})}
					</select>
				</div>
			)
	}
}