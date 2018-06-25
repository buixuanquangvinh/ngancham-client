import React, { Component } from 'react'
import Section from './section'
import { isRole } from 'ulti'

export default class Dashboard extends Component {

	render(){
	  	return (
	      <div className="row">
	        {isRole('admin','manager')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-pencil-alt'/>} label="HÓA ĐƠN" url="#/order-creator"/></div>:null}
	        {isRole('admin','manager')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-clipboard'/>} label="PHÒNG" url="#/room"/></div>:null}
	        {isRole('admin','manager')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-cart-arrow-down'/>} label="BẾP" url="#/kitchen"/></div>:null}
	        {isRole('admin')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-folder-open'/>} label="DANH MỤC" url="#/category"/></div>:null}
	        {isRole('admin')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-folder-open'/>} label="KHO" url="#/material"/></div>:null}
	        {isRole('admin')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-file'/>} label="MẶT HÀNG" url="#/item"/></div>:null}
	        {isRole('admin')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-chart-line'/>} label="BÁO CÁO" url="#/report"/></div>:null}
	        {isRole('admin')?<div className="col-6 col-md-4"><Section icon={<i className='fas fa-user'/>} label="NHÂN VIÊN" url="#/user"/></div>:null}
	      </div>
	    )
	}

}