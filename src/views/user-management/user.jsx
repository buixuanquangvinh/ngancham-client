import React, { Component } from 'react'

export default class User extends Component {

	render(){
		const { user } = this.props
  	return (
      <div className="media mt-1 border rounded p-1">
        <div className="media-body">
          {user.user_name}
        </div>
      </div>
    )
	}

}