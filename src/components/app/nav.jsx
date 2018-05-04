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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
        </div>
        <span className="navbar-brand" style={{cursor:'pointer'}}>{user.user_name}</span>
        <span className="navbar-brand" style={{cursor:'pointer'}} onClick={logout}><i className='fas fa-power-off'></i></span>
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