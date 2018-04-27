import React, { Component } from 'react'

export default class AppInput extends Component{

	render(){
		const { label, value, onChange, readOnly } = this.props
		return(
			<div className="input-group mb-3">
			  	<div className="input-group-prepend">
			    	<span className="input-group-text">{label}</span>
			  	</div>
			  	<input type="text" className="form-control" value={value} onChange={(e)=>onChange(e.target.value)} readOnly={readOnly?readOnly:false}/>
			</div>
		)
	}
}