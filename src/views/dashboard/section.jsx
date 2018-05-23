import React, { Component } from 'react'

export default class Section extends Component {

	render(){
		const { icon, label, url } = this.props
	  	return (
	  		<a href={url}>
		      	<div className="card mb-2 text-center" style={{height:'100px'}}>
		        	<div className='card-body row p-1'>
		        		<div className='col-12' style={{fontSize:'30px'}}>{icon}</div>
		        		<div className='col-12'>{label}</div>
		        	</div>
		      	</div>
	      	</a>
	    )
	}

}