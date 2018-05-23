import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginAction, LoginSelector } from 'features/login'

class Nav extends Component {

	render(){
    const { logout } = this.props
    const user = JSON.parse(localStorage.user)
  	return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="#"><i className='fab fa-chrome'></i></a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <span className="navbar-brand" style={{cursor:'pointer'}}>{user.user_name}</span>
          </li>
          <li className="nav-item">
            <span className="navbar-brand" style={{cursor:'pointer'}} onClick={logout}><i className='fas fa-power-off'></i></span>
          </li>
        </ul>
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