import React, { Component } from 'react'
import { AppCurrency } from 'components/common-ui'

export default class ArchivedOrder extends Component {

	render(){
		const { archivedOrder } = this.props
	  	return (
	      <div className='d-table-row text-center'>
	        <div className='d-table-cell p-1'>{archivedOrder.room_name}</div>
	        <div className='d-table-cell p-1'>{archivedOrder.create_user}</div>
	        <div className='d-table-cell p-1'>{archivedOrder.checkout_user}</div>
	        <div className='d-table-cell p-1'><AppCurrency>{archivedOrder.total_amount}</AppCurrency></div>
	      </div>
	    )
	}

}