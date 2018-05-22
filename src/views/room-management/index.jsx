import React, { Component } from 'react'
import { connect } from 'react-redux'

import { RoomAction, RoomSelector } from 'features/room'
import { RoomForm, Room } from 'components/room'

class RoomManagement extends Component {

	render(){
		const { roomList, create } = this.props
	  	return (
	      <div className="row">
	        <div className="col-12"><RoomForm submit={create}/></div>
        	{roomList.map((room)=>{
      			return <div className='col-12' key={room.id}><a href={'#/room/'+room.id}><Room room={room}/></a></div>
    		})}
	      </div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
  	roomList: RoomSelector.getRoomList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (room) => dispatch({ type:RoomAction.CREATE_ROOM, payload: room })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomManagement)