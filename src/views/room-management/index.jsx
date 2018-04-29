import React, { Component } from 'react'
import { connect } from 'react-redux'

import { RoomSelector } from 'features/room'
import { TableSelector } from 'features/table'

import PendingOrderedItemList from './pending-ordered-item-list'
import RoomList from './room-list'
import TableList from './table-list'
import TakeAbleOrderList from './take-able-order-list'
import TableDetail from './table-detail'

class RoomManagement extends Component {

	render(){
		const { currentRoom, currentTable } = this.props
	  	return (
	      <div className="row">
	        {currentRoom.id?
		        <div className="col-6">
		        	<TakeAbleOrderList/>
		        	<TableList/>
		        </div>:null
		    }
		    {currentRoom.id?
		        <div className="col-6">
					{currentTable.id?<TableDetail/>:<PendingOrderedItemList/>}	        	
		        </div>:null
	    	}
	    	<div className="col-12">
	        	<RoomList/>
	        </div>
	      </div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
  	currentRoom: RoomSelector.getCurrentRoom(state),
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
)(RoomManagement)