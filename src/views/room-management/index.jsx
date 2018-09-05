import React, { Component } from 'react'
import { connect } from 'react-redux'

import { RoomSelector } from 'features/room'
import { Room } from 'components/room'

class RoomManagement extends Component {

	render(){
		const { roomList } = this.props
	  	return (
	      <div className="row">
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

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomManagement)