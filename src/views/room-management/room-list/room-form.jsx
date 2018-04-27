import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput, AppModal } from 'components/common-ui'
import { RoomAction, RoomSelector } from 'features/room'

class RoomForm extends Component {

	render(){
    const { roomForm, edit, create } = this.props
  	return (
      <AppModal id="room-form" label={<i className="fas fa-plus"></i>}>
        <div className='row'>
          <div className='col-9'>
            <AppInput label='Tên phòng' value={roomForm.room_name} onChange={(value)=>edit('room_name',value)}/>
          </div>
          <div className='col-3 text-right'>
            <button className='btn btn-primary' onClick={()=>create(roomForm)}>Tạo</button>
          </div>
        </div>
      </AppModal>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    roomForm: RoomSelector.getRoomForm(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:RoomAction.EDIT_ROOM_FORM, payload:{ key:key, value:value } }),
    create: (room) => dispatch({ type:RoomAction.CREATE_ROOM, payload: room })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomForm)