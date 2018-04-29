import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OrderAction, OrderSelector } from 'features/order'

import { AppSection, AppDropable } from 'components/common-ui'
import Order from './order'

class TakeAbleOrderList extends Component {

	render(){
    const { availableOrders, saveOrder } = this.props
  	return (
      <AppSection label='HÓA ĐƠN CHƯA CHỌN BÀN HOẶC CHUYỂN BÀN'>
        <AppDropable type='order' onDrop={(order)=>saveOrder({...order,table_id:null})}>
          <div className='row' style={{minHeight:'60px'}}>
            {availableOrders.map((order)=>{
              return <div className='col-3' key={order.id}><Order order={order}/></div>
            })}
          </div>
        </AppDropable>
      </AppSection>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    availableOrders: OrderSelector.getAvailableOrder(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder:(order)=> dispatch({ type:OrderAction.SAVE_ORDER, payload:order })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TakeAbleOrderList)