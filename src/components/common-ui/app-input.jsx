import React, { Component } from 'react'

export default class AppInput extends Component{

	render(){
		const { label, type, value, onChange, readOnly, compact } = this.props
		if(compact)
			return(
				<div className="mb-3">
				  	<input type={type?type:"text"} className="form-control" value={value} onChange={(e)=>onChange(e.target.value)} readOnly={readOnly?readOnly:false}/>
				</div>
			)
		else
			return(
				<div className="input-group mb-3">
				  	<div className="input-group-prepend">
				    	<span className="input-group-text">{label}</span>
				  	</div>
				  	<input type={type?type:"text"} className="form-control" value={value} onChange={(e)=>onChange(e.target.value)} readOnly={readOnly?readOnly:false}/>
				</div>
			)
	}
}