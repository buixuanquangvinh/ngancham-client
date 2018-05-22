import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OrderAction, OrderSelector } from 'features/order'
import { RoomAction, RoomSelector } from 'features/room'
import { AppSection, AppDropable, AppDragable } from 'components/common-ui'
import { Order } from 'components/order'

import { isRole } from 'ulti'

class TableList extends Component {

	render(){
    const { room, orderList, currentOrder, saveOrder, params , selectOrder} = this.props
  	return (
      <AppSection label='DANH SÁCH ORDER'>
        <AppDropable type="order" onDrop={(order)=>saveOrder({...order,room_id:params.id})}>
          <div className='row' style={{height:'298px',overflow:'auto'}}>
            {orderList.map((order)=>{
              return (
                <div className='col-6 col-md-4 mb-2' key={order.id} onClick={()=>selectOrder(order)}>
                  <AppDragable type="order" dragItem={order}><Order order={order} currentOrder={currentOrder}/></AppDragable>
                </div>
              )
            })}
          </div>
         </AppDropable>
      </AppSection>
    )
	}

}

const mapStateToProps = (state,props) => {
  const room = RoomSelector.getRoom(state,props.params.id)
  return {
    room: room,
    orderList: OrderSelector.getOrderListByRoom(state,room.id),
    currentOrder: OrderSelector.getCurrentOrder(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder:(order)=> dispatch({ type:OrderAction.SAVE_ORDER, payload:order }),
    selectOrder:(order)=> dispatch({ type:OrderAction.SELECT_ORDER, payload:order })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableList)