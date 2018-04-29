import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppDropable } from 'components/common-ui'
import { OrderAction, OrderSelector } from 'features/order'
import { TableAction, TableSelector } from 'features/table'

import Order from './order'

class Table extends Component {

	handleTableCLick = (e)=>{
		const { selectTable, table } = this.props
		selectTable(table)
	}

	render(){
		const { table, currentTable, orders, saveOrder, selectTable } = this.props
		const { handleTableCLick } = this
		let className = "border rounded p-1 text-center"
		if(table.id==currentTable.id)
			className = "border rounded p-1 text-center bg-success"
	  	return (
	  		<AppDropable type="order" onDrop={(order)=>saveOrder({...order,table_id:table.id})}>
		      	<div className={className} style={{height:'150px'}} onClick={handleTableCLick}>
		        	{table.table_number}
		        	{orders.map((order)=>{
		        		return <Order key={order.id} order={order}/>
		        	})}
		      	</div>
	      	</AppDropable>
	    )
	}

}

const mapStateToProps = (state,props) => {
  	return {
  		orders: OrderSelector.getOrderByTable(state,props.table.id)
  	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder:(order)=> dispatch({ type:OrderAction.SAVE_ORDER, payload:order }),
    selectTable:(table)=> dispatch({ type:TableAction.SELECT_TABLE, payload:table })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)