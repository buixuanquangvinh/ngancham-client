import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginAction, LoginSelector } from 'features/login'

class Nav extends Component {

	render(){
    const { logout } = this.props
    const user = JSON.parse(localStorage.user)
  	return (
      <nav className="navbar fixed-top navbar-light bg-warning">
        <a className="navbar-brand" href="#"><i className='fab fa-chrome'></i></a>
        <span onClick={()=>window.history.back()} style={{cursor:'pointer'}}><i className="fas fa-arrow-alt-circle-left"></i></span>
        <span style={{cursor:'pointer'}}>{user.user_name}</span>
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