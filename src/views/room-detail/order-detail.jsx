import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CategorySelector } from 'features/category'
import { ItemSelector } from 'features/item'
import { OrderSelector, OrderAction } from 'features/order'

import { AppSection, AppModal, AppCurrency } from 'components/common-ui'
import { OrderForm, OrderedItem } from 'components/order'

class OrderDetail extends Component {

	calculateSum = ()=>{
	    const { orderedItems } = this.props
	    let sum = 0
	    orderedItems.map((ordered_item)=>{
			let totalsum = 0
			if(ordered_item.status=='done'){
				totalsum += ordered_item.item_price
				ordered_item.item_modifiers.map((modifier)=>{
					totalsum += modifier.item_modifier_price
				})
				sum += totalsum*ordered_item.number_of_item
			}
	    })
	    return sum
	}

	preProcess = (form)=>{
	    const { currentOrder, itemModifierList, createOrderedItem } = this.props
	    let new_order_items = form.order_items.map((order_item)=>{
	      let new_modifiers = order_item.item_modifiers.map((item_modifier)=>{
	        return itemModifiers.filter((mod)=> mod.id==item_modifier)[0]
	      })
	      return {...order_item, order_id:currentOrder.id, item_modifiers:new_modifiers}
	    })
	    createOrderedItem({...form,order_items:new_order_items})
	}

	render(){
		const { currentOrder, orderedItems, loading, categoryOption, itemList, itemPriceList, itemModifierList, selectOrder, saveOrderedItem, checkout, os } = this.props
		const { calculateSum, preProcess } = this
	  	return (
	  		<AppSection label={'Hóa đơn '+currentOrder.order_number}>
		      	<div className='row' style={{height:'460px',overflow:'auto'}}>
			        <div className='col-12 d-table mb-2'>
			          <div className='d-table-row text-center'>
			            <div className='d-table-cell p-1'></div>
			            <div className='d-table-cell p-1'>Tên</div>
			            <div className='d-table-cell p-1'><AppCurrency>{calculateSum()}</AppCurrency></div>
			            <div className='d-table-cell p-1'>#</div>
			            <div className='d-table-cell p-1'></div>
			          </div>
			          {orderedItems.map((orderedItem)=>{
			            return <OrderedItem key={orderedItem.id} orderedItem={orderedItem} saveOrderedItem={saveOrderedItem} done={true} cancel={true}/>
			          })}
			        </div>
		      		<div className='col-12'>
		      			<button className='btn btn-success btn-block mb-2' onClick={()=>checkout(currentOrder)}>THANH TOÁN</button>
          				<AppModal id={"ordered-item-form"+os} label='THÊM MÓN' full={true}>
          					<OrderForm 
          						submit={preProcess}
					          	loading={loading}
					          	categoryOption={categoryOption}
					          	itemList={itemList}
					          	itemModifierList={itemModifierList}
					        />
	      				</AppModal>
		      			<button className='btn btn-warning btn-block mt-2' onClick={()=>selectOrder({})}>BỎ CHỌN</button>
		      		</div>
		      	</div>
	      	</AppSection>
	    )
	}

}

const mapStateToProps = (state) => {
	let currentOrder = OrderSelector.getCurrentOrder(state)
  	return {
  		currentOrder: currentOrder,
    	orderedItems: OrderSelector.getOrderedItemByOrder(state,currentOrder.id),
    	loading:OrderSelector.getLoading(state),
    	categoryOption: CategorySelector.getCategoryOption(state),
    	itemList: ItemSelector.getItemList(state),
    	itemModifierList: ItemSelector.getItemModifierList(state)
  	}
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    selectOrder: (order)=>dispatch({ type:OrderAction.SELECT_ORDER, payload:order }),
    saveOrderedItem: (ordered_item)=> dispatch({ type:OrderAction.SAVE_ORDERED_ITEM, payload:ordered_item }),
    checkout: (order)=>dispatch({ type:OrderAction.CHECKOUT_ORDER, payload:order }),
    createOrderedItem: (orderForm)=> dispatch({ type:OrderAction.CREATE_ORDERED_ITEM, payload:orderForm })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail)