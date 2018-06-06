import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppSection } from 'components/common-ui'

import { OrderAction, OrderSelector } from 'features/order'

import { OrderedItem } from 'components/order'

class PendingOrderedItemList extends Component {

	render(){
		const { orderedItems, saveOrderedItem } = this.props
	  	return (
	  		<AppSection label='Danh sách đồ chưa hoàn thành của phòng'>
		      	<div className='row' style={{height:'460px',overflow:'auto'}}>
		      		<div className='col-12'>
		      			<div className='row'>
					        <div className='col-12 d-table mb-2'>
					          <div className='d-table-row text-center'>
					            <div className='d-table-cell p-1'></div>
					            <div className='d-table-cell p-1'>Tên</div>
					            <div className='d-table-cell p-1'>Giá</div>
					            <div className='d-table-cell p-1'>#</div>
					            <div className='d-table-cell p-1'></div>
					          </div>
					          {orderedItems.filter((orderedItem)=>orderedItem.status=='pending' || orderedItem.status=='cooked').map((orderedItem)=>{
					            return <OrderedItem key={orderedItem.id} orderedItem={orderedItem} saveOrderedItem={saveOrderedItem} done={true} cancel={true}/>
					          })}
					        </div>
					    </div>
		      		</div>
		      	</div>
	      	</AppSection>
	    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    orderedItems: OrderSelector.getOrderedItemByRoom(state,props.params.id)
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