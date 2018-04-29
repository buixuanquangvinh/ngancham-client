import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppSection } from 'components/common-ui'
import OrderedItemList from './ordered-item-list'
import TableButtons from './table-buttons'

import { TableSelector } from 'features/table'
import { OrderSelector } from 'features/order'

class TableDetail extends Component {

	render(){
		const { currentTable, orderedItems } = this.props
	  	return (
	  		<AppSection label={'BÀN '+currentTable.table_number}>
		      	<div className='row' style={{height:'460px',overflow:'auto'}}>
		      		{orderedItems.length?
			      		<div className='col-12'>
			      			<OrderedItemList/>
			      			<TableButtons/>
			      		</div>:'không có hóa đơn nào'
		      		}
		      	</div>
	      	</AppSection>
	    )
	}

}

const mapStateToProps = (state) => {
	let currentTable = TableSelector.getCurrentTable(state)
  	return {
  		currentTable: currentTable,
    	orderedItems: OrderSelector.getOrderedItemByTable(state,currentTable.id)
  	}
}

 export default connect(
  mapStateToProps
)(TableDetail)