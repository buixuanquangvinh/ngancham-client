import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TableSelector } from 'features/table'
import { ItemSelector } from 'features/item'
import { OrderSelector, OrderAction } from 'features/order'

import { AppCurrency } from 'components/common-ui'

class OrderedItem extends Component {

	render(){
		const { orderedItem, table, saveOrderedItem } = this.props
		let className = "rounded bg-secondary"
		if(orderedItem.status == 'done')
		  className = "rounded bg-success"
		if(orderedItem.status == 'cancel')
		  className = "rounded bg-danger"
		let name = orderedItem.item_name
		let sum = orderedItem.item_price
		orderedItem.item_modifiers.map((modifier)=>{
			sum+=modifier.item_modifier_price
			name = name+' '+modifier.item_modifier_name
		})
		return (
		  <div className='d-table-row text-center'>
			<div className='d-table-cell p-1'><div className={className} style={{width:'10px',height:'10px'}}></div></div>
			<div className='d-table-cell p-1'>{table.table_number}</div>
			<div className='d-table-cell p-1'>{name}</div>
			<div className='d-table-cell p-1'><AppCurrency>{sum}</AppCurrency></div>
			<div className='d-table-cell p-1'>{orderedItem.number_of_item}</div>
			<div className='d-table-cell p-1'>
			  <button className='btn btn-success' onClick={()=>saveOrderedItem({...orderedItem,status:'done'})}><i className="fas fa-check"></i></button>&nbsp;
			  <button className='btn btn-danger' onClick={()=>saveOrderedItem({...orderedItem,status:'cancel'})}><i className="fas fa-times"></i></button>
			</div>
		  </div>
		)
	}

}

const mapStateToProps = (state,props) => {
  let order = OrderSelector.getOrder(state,props.orderedItem.order_id)
  return {
    table: TableSelector.getTable(state,order.table_id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderedItem: (ordered_item)=> dispatch({ type:OrderAction.SAVE_ORDERED_ITEM, payload:ordered_item }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedItem)