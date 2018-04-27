import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TableAction, TableSelector } from 'features/table'
import { RoomAction, RoomSelector } from 'features/room'
import { AppSection, AppDropable } from 'components/common-ui'
import Table from './table'
import TableForm from './table-form'

class TableList extends Component {

	render(){
    const { room, tableList, currentTable } = this.props
  	return (
      <AppSection label='DANH SÁCH BÀN'>
        <div className='row'>
          {room.id?<div className='col-3 mb-2'><TableForm/></div>:null}
          {tableList.map((table)=>{
            return <div className='col-3 mb-2' key={table.id}><Table table={table} currentTable={currentTable}/></div>
          })}
        </div>
      </AppSection>
    )
	}

}

const mapStateToProps = (state,props) => {
  const room = RoomSelector.getCurrentRoom(state)
  return {
    room: room,
    tableList: TableSelector.getTableListByRoom(state,room.id),
    currentTable: TableSelector.getCurrentTable(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableList)