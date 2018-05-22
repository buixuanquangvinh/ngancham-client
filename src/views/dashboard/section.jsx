import React, { Component } from 'react'

export default class Section extends Component {

	render(){
		const { icon, label, url } = this.props
	  	return (
	  		<a href={url}>
		      	<div className="border rounded p-1 mt-2 text-center" style={{height:'100px',lineHeight:'90px'}}>
		        	<div className='row'>
		        		<div className='col-3' style={{fontSize:'40px'}}>{icon}</div>
		        		<div className='col-9' style={{fontSize:'20px'}}>{label}</div>
		        	</div>
		      	</div>
	      </a>
	    )
	}

}