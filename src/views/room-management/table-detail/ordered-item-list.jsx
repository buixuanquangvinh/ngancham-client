import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TableSelector } from 'features/table'
import { OrderSelector } from 'features/order'

import OrderedItem from './ordered-item'
import { AppCurrency } from 'components/common-ui'

class OrderedItemList extends Component {
  
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

	render(){
    const { orderedItems } = this.props
    const { calculateSum } = this
  	return (
      <div className='row'>
        <div className='col-12 d-table mb-2'>
          <div className='d-table-row text-center'>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'>Tên</div>
            <div className='d-table-cell p-1'>Giá</div>
            <div className='d-table-cell p-1'>#</div>
            <div className='d-table-cell p-1'></div>
          </div>
          {orderedItems.map((orderedItem)=>{
            return <OrderedItem key={orderedItem.id} orderedItem={orderedItem}/>
          })}
          <div className='d-table-row text-center'>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'><AppCurrency>{calculateSum()}</AppCurrency></div>
            <div className='d-table-cell p-1'></div>
            <div className='d-table-cell p-1'></div>
          </div>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  let currentTable = TableSelector.getCurrentTable(state)
  return {
    orderedItems: OrderSelector.getOrderedItemByTable(state,currentTable.id)
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