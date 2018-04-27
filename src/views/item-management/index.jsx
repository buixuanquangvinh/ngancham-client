import React, { Component } from 'react'
import ItemForm from './item-form'
import ItemList from './item-list'

export default class ItemManagement extends Component {

	render(){
	  	return (
	      	<div className="row">
	        	<div className="col-3"><ItemForm/></div>
	        	<div className="col-9"><ItemList/></div>
	      	</div>
	    )
	}

}