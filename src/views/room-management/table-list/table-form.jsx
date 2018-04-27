import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput, AppModal } from 'components/common-ui'
import { TableAction, TableSelector } from 'features/table'
import { RoomSelector } from 'features/room'

class TableForm extends Component {

	render(){
    const { tableForm, room, edit, create } = this.props
  	return (
      <AppModal id='table-form' label={<i className="fas fa-plus"></i>} height='200px'>
        <div className='row'>
          <div className='col-10'>
            <AppInput label='Số bàn' value={tableForm.table_number} onChange={(value)=>edit('table_number',value)}/>
          </div>
          <div className='col-2'>
            <button className='btn btn-primary' onClick={()=>create({...tableForm,room_id:room.id})}>Tạo</button>
          </div>
        </div>
      </AppModal>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    tableForm: TableSelector.getTableForm(state),
    room: RoomSelector.getCurrentRoom(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:TableAction.EDIT_TABLE_FORM, payload:{ key:key, value:value } }),
    create: (table) => dispatch({ type:TableAction.CREATE_TABLE, payload: table })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableForm)