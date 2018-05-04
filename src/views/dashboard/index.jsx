import React, { Component } from 'react'
import Section from './section'
import { isRole } from 'ulti'

export default class Dashboard extends Component {

	render(){
	  	return (
	      <div className="row">
	        {isRole('admin','manager')?<div className="col-6"><Section icon={<i className='fas fa-pencil-alt'/>} label="TẠO HÓA ĐƠN" url="#/order-creator"/></div>:null}
	        {isRole('admin','manager')?<div className="col-6"><Section icon={<i className='fas fa-clipboard'/>} label="QUẢN LÝ PHÒNG" url="#/room"/></div>:null}
	        {isRole('admin')?<div className="col-6"><Section icon={<i className='fas fa-folder-open'/>} label="QUẢN LÝ DANH MỤC" url="#/category"/></div>:null}
	        {isRole('admin')?<div className="col-6"><Section icon={<i className='fas fa-file'/>} label="QUẢN LÝ MẶT HÀNG" url="#/item"/></div>:null}
	        {isRole('admin')?<div className="col-6"><Section icon={<i className='fas fa-chart-line'/>} label="BÁO CÁO" url="#/report"/></div>:null}
	        {isRole('admin')?<div className="col-6"><Section icon={<i className='fas fa-user'/>} label="QUẢN LÝ NGƯỜI DÙNG" url="#/user"/></div>:null}
	      </div>
	    )
	}

}