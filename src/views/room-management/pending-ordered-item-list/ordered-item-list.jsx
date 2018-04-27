import React, { Component } from 'react'
import { connect } from 'react-redux'

import { RoomSelector } from 'features/room'
import { TableSelector } from 'features/table'
import { OrderSelector } from 'features/order'

import OrderedItem from './ordered-item'

class OrderedItemList extends Component {

	render(){
    const { orderedItems } = this.props
  	return (
      <div className='row'>
        <div className='col-12 d-table mb-2'>
          <div className='d-table-row text-center'>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'>Bàn</div>
            <div className='d-table-cell p-1'>Tên</div>
            <div className='d-table-cell p-1'>Giá</div>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'>#</div>
            <div className='d-table-cell p-1'></div>
          </div>
          {orderedItems.filter((orderedItem)=>orderedItem.status=='pending').map((orderedItem)=>{
            return <OrderedItem key={orderedItem.id} orderedItem={orderedItem}/>
          })}
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  const room = RoomSelector.getCurrentRoom(state)
  const tables = TableSelector.getTableListByRoom(state,room.id).map((table)=>table.id)
  let orderedItems = []
  tables.map((id)=>orderedItems = orderedItems.concat(OrderSelector.getOrderedItemByTable(state,id)))
  return {
    orderedItems: orderedItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedItemList)