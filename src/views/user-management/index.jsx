import React, { Component } from 'react'
import UserForm from './user-form'
import UserList from './user-list'

export default class UserManagement extends Component {

	render(){
	  	return (
	      <div className="row">
	        <div className="col-12"><UserForm/></div>
	        <div className="col-12"><UserList/></div>
	      </div>
	    )
	}

}