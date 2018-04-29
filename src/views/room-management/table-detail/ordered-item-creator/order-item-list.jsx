import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TableSelector } from 'features/table'
import { OrderAction, OrderSelector } from 'features/order'
import { ItemSelector } from 'features/item'

import { AppInput } from 'components/common-ui'
import OrderItem from './order-item'

class OrderItemList extends Component {
  
  preProcess = ()=>{
    const { order, form, itemModifiers, createOrderedItem } = this.props
    let new_order_items = form.order_items.map((order_item)=>{
      let new_modifiers = order_item.item_modifiers.map((item_modifier)=>{
        return itemModifiers.filter((mod)=> mod.id==item_modifier)[0]
      })
      return {...order_item,order_id:order.id,item_modifiers:new_modifiers}
    })
    createOrderedItem({...form,order_items:new_order_items})
  }

	render(){
    const { form, edit } = this.props
    const { preProcess } = this
  	return (
      <div className='row'>
        <div className='col-12'><button className='btn btn-primary' onClick={preProcess}>CREATE</button></div>
        <div className='col-12 d-table'>
          {form.order_items.map((orderItem)=>{
            return <OrderItem key={orderItem.temp_id} orderItem={orderItem}/>
          })}
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  let currentTable = TableSelector.getCurrentTable(state)
  let orders = OrderSelector.getOrderByTable(state,currentTable.id)
  let order = {}
  if(orders.length)
    order = orders[0]
  return {
    order:order,
    form: OrderSelector.getOrderForm(state),
    itemModifiers: ItemSelector.getItemModifierList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:OrderAction.EDIT_ORDER_FORM, payload:{ key:key, value:value } }),
    createOrderedItem: (orderForm)=> dispatch({ type:OrderAction.CREATE_ORDERED_ITEM, payload:orderForm })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItemList)