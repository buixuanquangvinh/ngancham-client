import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RoomAction, RoomSelector } from 'features/room'
import { AppSection, AppDropable } from 'components/common-ui'
import RoomForm from './room-form'
import Room from './room'

import { isRole } from 'ulti'

class RoomList extends Component {

	render(){
    const { roomList } = this.props
  	return (
      <AppSection label='DANH SÁCH PHÒNG'>
        <div className='row'>
          {isRole('admin')?<div className='col-2'><RoomForm/></div>:null}
          {roomList.map((room)=>{
            return <div className='col-2' key={room.id}><Room room={room}/></div>
          })}
        </div>
      </AppSection>
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
)(RoomList)