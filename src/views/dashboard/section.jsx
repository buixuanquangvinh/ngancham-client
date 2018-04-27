import React, { Component } from 'react'

export default class Section extends Component {

	render(){
		const { icon, label, url } = this.props
	  	return (
	  		<a href={url}>
		      	<div className="border rounded p-1 mt-2 text-center" style={{height:'100px',lineHeight:'90px',fontSize:'50px'}}>
		        	<div className='row'>
		        		<div className='col-3'>{icon}</div>
		        		<div className='col-9'>{label}</div>
		        	</div>
		      	</div>
	      </a>
	    )
	}

}