import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CategorySelector } from 'features/category'
import { ItemSelector } from 'features/item'
import { OrderAction, OrderSelector } from 'features/order'

import { OrderForm } from 'components/order'

class OrderCreator extends Component {

  preProcess = (form)=>{
    const { itemModifierList, createOrder } = this.props
    let new_order_items = form.order_items.map((order_item)=>{
      let new_modifiers = order_item.item_modifiers.map((item_modifier)=>{
        return itemModifierList.filter((mod)=> mod.id==item_modifier)[0]
      })
      return {...order_item,item_modifiers:new_modifiers}
    })
    createOrder({...form,order_items:new_order_items})
  }

	render(){
      const { loading, categoryOption, itemList, itemModifierList } = this.props
      const { preProcess } = this
	  	return (
        <OrderForm 
          submit={preProcess}
          loading={loading}
          categoryOption={categoryOption}
          itemList={itemList}
          itemModifierList={itemModifierList}
        />
	    )
	}
}

const mapStateToProps = (state) => {
  return {
    loading:OrderSelector.getLoading(state),
    categoryOption: CategorySelector.getCategoryOption(state),
    itemList: ItemSelector.getItemList(state),
    itemModifierList: ItemSelector.getItemModifierList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: (orderForm)=> dispatch({ type:OrderAction.CREATE_ORDER, payload:orderForm })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCreator)