import React, { Component } from 'react'

export default class Section extends Component {

	render(){
		const { icon, label, url } = this.props
	  	return (
	  		<a href={url}>
		      	<div className="border rounded p-1 mt-2 text-center" style={{height:'100px',lineHeight:'90px'}}>
		        	<div className='row'>
		        		<div className='col-2' style={{fontSize:'40px'}}>{icon}</div>
		        		<div className='col-10' style={{fontSize:'30px'}}>{label}</div>
		        	</div>
		      	</div>
	      </a>
	    )
	}

}