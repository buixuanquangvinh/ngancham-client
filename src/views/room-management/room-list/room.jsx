import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomAction, RoomSelector } from 'features/room'

class Room extends Component {

	render(){
		const { room, currentRoom, selectRoom } = this.props
    let className = "border rounded p-2 text-center"
    if(currentRoom.id==room.id)
      className = "border rounded p-2 text-center bg-primary"
  	return (
      <div className={className} onClick={()=>selectRoom(room)}>
        {room.room_name}
      </div>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    currentRoom: RoomSelector.getCurrentRoom(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectRoom: (room)=> dispatch({ type:RoomAction.SELECT_ROOM, payload:room })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room)