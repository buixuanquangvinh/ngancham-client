import React, { Component } from 'react'
import Select from 'react-select'

export default class AppMultiSelect extends Component{

	render(){
		const { label, value, options, onChange } = this.props
		return(
			<div className="input-group mb-3">
			  	<div className="input-group-prepend">
			    	<span className="input-group-text">{label}</span>
			  	</div>
			  	<div style={{minWidth:'70%'}}>
				  	<Select 
		                simpleValue={true}
		                value={value} 
		                multi={true} 
		                onChange={(value)=>onChange(value.length?value.split(","):[])}
		                options={options}
		            />
	            </div>
			</div>
		)
	}
}