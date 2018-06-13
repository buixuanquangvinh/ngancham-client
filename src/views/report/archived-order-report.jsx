import React, { Component } from 'react'

import { ArchivedOrder } from 'components/report'

export default class ArchivedOrderReport extends Component {

	render(){
		const { archivedOrderList, archivedOrderedItemList } = this.props 
	  	return (
	      	<div className="row">
		        <div className='col-12'>
		          	{archivedOrderList.map((archivedOrder)=>{
		          		let archivedOrderedItems =archivedOrderedItemList.filter((i)=>i.archived_order_id==archivedOrder.id)
		            	return <ArchivedOrder key={archivedOrder.id} archivedOrder={archivedOrder} archivedOrderedItems={archivedOrderedItems}/>
		          	})}
		        </div>
	      	</div>
	    )
	}

}