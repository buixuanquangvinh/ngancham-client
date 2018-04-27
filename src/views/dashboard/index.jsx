import React, { Component } from 'react'
import Section from './section'

export default class Dashboard extends Component {

	render(){
	  	return (
	      <div className="row">
	        <div className="col-6"><Section icon={<i className='fas fa-pencil-alt'/>} label="TẠO HÓA ĐƠN" url="#/order-creator"/></div>
	        <div className="col-6"><Section icon={<i className='fas fa-clipboard'/>} label="QUẢN LÝ PHÒNG" url="#/room"/></div>
	        <div className="col-6"><Section icon={<i className='fas fa-folder-open'/>} label="QUẢN LÝ DANH MỤC" url="#/category"/></div>
	        <div className="col-6"><Section icon={<i className='fas fa-file'/>} label="QUẢN LÝ MẶT HÀNG" url="#/item"/></div>
	      </div>
	    )
	}

}