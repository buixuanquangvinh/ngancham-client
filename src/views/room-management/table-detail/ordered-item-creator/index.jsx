import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TableSelector } from 'features/table'
import { OrderAction } from 'features/order'

import Menu from './menu'
import OrderItemList from './order-item-list'

import { AppModal } from 'components/common-ui'

class OrderedItemCreator extends Component {

	componentWillUnmount(){
		this.props.clearOrderItem()
	}

	componentWillReceiveProps(props){
		if(props.currentTable.id !=this.props.currentTable.id)
			this.props.clearOrderItem()
	}

	render(){
		const { currentTable } = this.props
	  	return (
	  		<AppModal id="ordered-item-form" label='THÊM MÓN' full={true}>
		      	<div className="row">
		        	<div className="col-3"><Menu/></div>
		        	<div className="col-9"><OrderItemList/></div>
		      	</div>
	      	</AppModal>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
  	currentTable: TableSelector.getCurrentTable(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	clearOrderItem: ()=>dispatch({ type: OrderAction.CLEAR_ORDER_ITEM })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedItemCreator)