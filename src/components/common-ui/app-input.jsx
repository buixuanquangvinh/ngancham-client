import React, { Component } from 'react'

export default class AppInput extends Component{

	render(){
		const { label, onChange, compact } = this.props
		if(compact)
			return(
				<div className="mb-3">
				  	<input className="form-control" {...this.props}/>
				</div>
			)
		else
			return(
				<div className="input-group mb-3">
				  	<div className="input-group-prepend">
				    	<span className="input-group-text">{label}</span>
				  	</div>
				  	<input className="form-control" {...this.props}/>
				</div>
			)
	}
}