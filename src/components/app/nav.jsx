import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginAction, LoginSelector } from 'features/login'

import SidebarItem from './sidebar-item'
import { isRole } from 'ulti'

class Nav extends Component {

  itemClass = (path)=>{
    const { pathname } = this.props.location
    if(path==pathname)
      return "dropdown-item active"
    return "dropdown-item"
  }

	render(){
    const { logout } = this.props
    const { itemClass } = this
    const user = JSON.parse(localStorage.user)
  	return (
      <nav className="navbar fixed-top text-light" style={{backgroundColor:'#6610f2'}}>
        <div className="navbar-brand dropdown">
          <a className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
            <i className='fab fa-chrome'></i>
          </a>
          <div className="dropdown-menu" style={{width:'260px'}}>
            <div className={itemClass('/')}><SidebarItem icon={<i className='fas fa-pencil-alt'/>} label="DASHBOARD" url="#/"/></div>
            {isRole('admin','manager')?<div className={itemClass('/order-creator')}><SidebarItem icon={<i className='fas fa-pencil-alt'/>} label="TẠO HÓA ĐƠN" url="#/order-creator"/></div>:null}
	          {isRole('admin','manager')?<div className={itemClass('/room')}><SidebarItem icon={<i className='fas fa-clipboard'/>} label="QUẢN LÝ PHÒNG" url="#/room"/></div>:null}
	          {isRole('admin','manager')?<div className={itemClass('/kitchen')}><SidebarItem icon={<i className='fas fa-cart-arrow-down'/>} label="QUẢN LÝ BẾP" url="#/kitchen"/></div>:null}
	          {isRole('admin')?<div className={itemClass('/category')}><SidebarItem icon={<i className='fas fa-folder-open'/>} label="QUẢN LÝ DANH MỤC" url="#/category"/></div>:null}
	          {isRole('admin')?<div className={itemClass('/material')}><SidebarItem icon={<i className='fas fa-folder-open'/>} label="QUẢN LÝ KHO" url="#/material"/></div>:null}
	          {isRole('admin')?<div className={itemClass('/item')}><SidebarItem icon={<i className='fas fa-file'/>} label="QUẢN LÝ MẶT HÀNG" url="#/item"/></div>:null}
	          {isRole('admin')?<div className={itemClass('/report')}><SidebarItem icon={<i className='fas fa-chart-line'/>} label="BÁO CÁO" url="#/report"/></div>:null}
	          {isRole('admin')?<div className={itemClass('/user')}><SidebarItem icon={<i className='fas fa-user'/>} label="QUẢN LÝ NHÂN VIÊN" url="#/user"/></div>:null}
          </div>
        </div>
        <span onClick={()=>window.history.back()} style={{cursor:'pointer'}}><i className="fas fa-arrow-alt-circle-left"></i></span>
        <span style={{cursor:'pointer'}}><a href="#/my-profile">{user.user_name}</a></span>
        <span onClick={logout} style={{cursor:'pointer'}}><i className='fas fa-power-off'></i></span>
      </nav>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({ type:LoginAction.LOGOUT })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav)