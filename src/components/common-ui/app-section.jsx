import React, { Component } from 'react'

export default class AppSection extends Component{

	render(){
		const { label, children } = this.props
		return(
			<div className="card mb-2">
			  	<div className="card-header">{label}</div>
			  	<div className="card-body">{children}</div>
			</div>
		)
	}
}