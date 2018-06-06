import React, { Component } from 'react'
import Select from 'react-select'

export default class AppMultiSelect extends Component{

	render(){
		const { label, value, options, onChange, compact } = this.props
		if(compact)
			return(
			  	<div style={{minWidth:'100px'}}>
				  	<Select 
		                simpleValue={true}
		                value={value} 
		                multi={true} 
		                onChange={(value)=>onChange(value.length?value.split(","):[])}
		                options={options}
		            />
	            </div>
			)
		else
			return(
				<div className="input-group">
				  	<div className="input-group-prepend">
				    	<span className="input-group-text">{label}</span>
				  	</div>
				  	<div style={{minWidth:'100px'}}>
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