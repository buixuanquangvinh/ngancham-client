import React, { Component } from 'react'

export default class Room extends Component {

	render(){
		const { room } = this.props
  	return (
      <div className="card mt-2">
        <div className="card-body">
          {room.room_name}
        </div>
      </div>
    )
	}

}