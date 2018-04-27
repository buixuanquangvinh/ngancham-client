import React, { Component } from 'react'

export default class Nav extends Component {

	render(){
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
      </nav>
    )
	}

}