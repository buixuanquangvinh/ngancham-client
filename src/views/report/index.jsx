import React, { Component } from 'react'
import Filter from './filter'
import ArchivedOrderList from './archived-order-list'

export default class Report extends Component {

	render(){
	  	return (
	      <div className="row">
	        <div className="col-12"><Filter/></div>
	        <div className="col-12"><ArchivedOrderList/></div>
	      </div>
	    )
	}

}