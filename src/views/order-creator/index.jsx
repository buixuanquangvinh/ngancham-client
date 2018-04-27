import React, { Component } from 'react'
import Menu from './menu'
import OrderItemList from './order-item-list'

export default class OrderManagement extends Component {

	render(){
	  	return (
	      	<div className="row">
	        	<div className="col-3"><Menu/></div>
	        	<div className="col-9"><OrderItemList/></div>
	      	</div>
	    )
	}

}