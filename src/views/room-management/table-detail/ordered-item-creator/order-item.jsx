import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ItemSelector } from 'features/item'
import { OrderAction } from 'features/order'

import { AppSelect, AppMultiSelect } from 'components/common-ui'

class OrderItem extends Component {

	render(){
		const { orderItem, prices, modifiers, edit, remove } = this.props
  	return (
      <div className="media mt-1 border rounded p-1">
        <img className="align-self-center mr-3" style={{width:'100px',height:'100px'}} src={orderItem.item_img_url}/>
        <div className="media-body pt-4">
          <div className='row'>
            <div className='col-2'><h5>{orderItem.item_name}</h5></div>
            <div className='col-3'>
              <AppSelect label='prices' value={orderItem.item_price} options={prices} onChange={(value)=>edit(orderItem.temp_id,'item_price',value)}/>
            </div>
            <div className='col-4'>
              <AppMultiSelect label='modifiers' value={orderItem.item_modifiers} options={modifiers} onChange={(value)=>edit(orderItem.temp_id,'item_modifiers',value)}/>
            </div>
            <div className='col-3'>
              <button className='btn btn-light' onClick={orderItem.number_of_item>1?()=>edit(orderItem.temp_id,'number_of_item',orderItem.number_of_item-1):null}><i className='fas fa-minus'/></button>&nbsp;
              {orderItem.number_of_item}&nbsp;
              <button className='btn btn-light' onClick={()=>edit(orderItem.temp_id,'number_of_item',orderItem.number_of_item+1)}><i className='fas fa-plus'/></button>&nbsp;&nbsp;&nbsp;
              <button className='btn btn-danger' onClick={()=>remove(orderItem)}><i className='fas fa-times'/></button>
            </div>
          </div>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    prices: ItemSelector.getItemPrices(state,props.orderItem.id).map((price)=>{ return { value:price.item_price, label:price.item_price_name+' : '+price.item_price } }),
    modifiers: ItemSelector.getItemModifiers(state,props.orderItem.id).map((mod)=>{
     return { value:mod.id, label:mod.item_modifier_name } 
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (temp_id,key,value)=> dispatch({ type:OrderAction.EDIT_ORDER_ITEM, payload:{ temp_id:temp_id, key:key, value:value } }),
    remove: (orderItem)=> dispatch({ type:OrderAction.REMOVE_ORDER_ITEM, payload:orderItem })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderItem)