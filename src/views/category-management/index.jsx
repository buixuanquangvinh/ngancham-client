import React, { Component } from 'react'
import CategoryForm from './category-form'
import CategoryList from './category-list'

export default class CategoryManagement extends Component {

	render(){
	  	return (
	      <div className="row">
	        <div className="col-12"><CategoryForm/></div>
	        <div className="col-12"><CategoryList/></div>
	      </div>
	    )
	}

}