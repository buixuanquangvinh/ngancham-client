import React, { Component } from 'react'
import { connect } from 'react-redux'
import { OrderAction, OrderSelector } from 'features/order'
import { ItemAction, ItemSelector } from 'features/item'

import { AppInput } from 'components/common-ui'
import OrderItem from './order-item'

class OrderItemList extends Component {
  
  componentWillUnmount(){
    this.props.clearOrderItem()
  }

  preProcess = ()=>{
    const { form, itemModifiers, createOrder } = this.props
    let new_order_items = form.order_items.map((order_item)=>{
      let new_modifiers = order_item.item_modifiers.map((item_modifier)=>{
        return itemModifiers.filter((mod)=> mod.id==item_modifier)[0]
      })
      return {...order_item,item_modifiers:new_modifiers}
    })
    createOrder({...form,order_items:new_order_items})
  }

	render(){
    const { form, edit, createOrder } = this.props
    const { preProcess } = this
  	return (
      <div className='row'>
        <div className='col-6'><AppInput label='Number' value={form.order_number} onChange={(value)=>edit('order_number',value)}/></div>
        <div className='col-6'><button className='btn btn-primary' onClick={preProcess}>CREATE</button></div>
        {form.order_items.map((orderItem)=>{
          return <div className='col-12' key={orderItem.temp_id}><OrderItem orderItem={orderItem}/></div>
        })}
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    form: OrderSelector.getOrderForm(state),
    itemModifiers: ItemSelector.getItemModifierList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearOrderItem: ()=>dispatch({ type: OrderAction.CLEAR_ORDER_ITEM }),
    edit: (key,value) => dispatch({ type:OrderAction.EDIT_ORDER_FORM, payload:{ key:key, value:value } }),
    createOrder: (orderForm)=> dispatch({ type:OrderAction.CREATE_ORDER, payload:orderForm })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItemList)