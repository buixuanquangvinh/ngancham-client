import React, { Component } from 'react'

export default class Room extends Component {

	render(){
		const { room } = this.props
  	return (
      <div className="media mt-1 border rounded p-1">
        <div className="media-body">
          {room.room_name}
        </div>
      </div>
    )
	}

}