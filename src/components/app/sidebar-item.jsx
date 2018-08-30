import React, { Component } from 'react'

export default class SidebarItem extends Component {

	render(){
		const { icon, label, url } = this.props
	  	return (
	  		<a href={url}>
		        <div className='row text-warning'>
		        	<div className='col-3' style={{fontSize:'30px'}}>{icon}</div>
		        	<div className='col-9 pt-2'>{label}</div>
		        </div>
	      	</a>
	    )
	}
}