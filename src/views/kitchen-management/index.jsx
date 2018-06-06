import React, { Component } from 'react'
import { connect } from 'react-redux'

import { OrderSelector, OrderAction } from 'features/order'

import { AppSection } from 'components/common-ui'
import { OrderedItem } from 'components/order'

class PendingOrderedItemList extends Component {

	render(){
		const { roomList, orderedItems, saveOrderedItem } = this.props
	  	return (
	  		<AppSection label='Danh sách đồ chưa hoàn thành'>
		      	<div className='row' >
			        <div className='col-12 d-table mb-2'>
			          	{orderedItems.filter((orderedItem)=>orderedItem.status=='pending').map((orderedItem)=>{
			            	return <OrderedItem key={orderedItem.id} orderedItem={orderedItem} saveOrderedItem={saveOrderedItem} cooked={true}/>
			          	})}
			        </div>
		      	</div>
	      	</AppSection>
	    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    orderedItems: OrderSelector.getOrderedItemList(state)
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
)(PendingOrderedItemList)