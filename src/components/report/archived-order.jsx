import React, { Component } from 'react'
import { AppCurrency } from 'components/common-ui'

export default class ArchivedOrder extends Component {

	render(){
		const { archivedOrder, archivedOrderedItems } = this.props
		let status = <i className="fas fa-check-circle text-secondary"></i>
			if(archivedOrder.status=='normal')
				status = <i className="fas fa-check-circle text-success"></i>
			if(archivedOrder.status=='abnormal')
				status = <i className="fas fa-exclamation-circle text-warning"></i>
	  	return (
	      <div className='card mb-2'>
	      	<div className='card-body row'>
	      		<div className='col-6 col-md-2'>ID: {archivedOrder.id}</div>
	      		<div className='col-4 col-md-2'>số: {archivedOrder.order_number}</div>
	      		<div className='col-2 col-md-1 test-right'>{status}</div>
		      	<div className='col-6 col-md-4 text-truncate'>Phòng: {archivedOrder.room_name}</div>
		      	<div className='col-6 col-md-2'>Tổng: <AppCurrency>{archivedOrder.total_amount}</AppCurrency></div>
		      	<div className='col-12 col-md-1 mt-1'><button className="btn btn-info btn-block" data-toggle="collapse" data-target={"#archivedOrder"+archivedOrder.id}><i className="fas fa-angle-down"></i></button></div>
		      	<div className='col-12 collapse mt-1' id={'archivedOrder'+archivedOrder.id}>
		      		<div className='row'>
		        		<div className='col-12 col-md-5'>
		        			<p>Tạo bởi: {archivedOrder.create_user}</p>
		        		</div>
		        		<div className='col-12 col-md-7'>
		        			<p>Thanh toán bởi: {archivedOrder.checkout_user}</p>
		        		</div>
		        		<div className='col-12'>
		        			{archivedOrderedItems.map((archivedOrderedItem)=>{
		        				return <ArchivedOrderedItem key={archivedOrderedItem.id} archivedOrderedItem={archivedOrderedItem}/>
		        			})}
		        		</div>
		        	</div>
				</div>
			</div>
	      </div>
	    )
	}

}

class ArchivedOrderedItem extends Component {

	render(){
		const { archivedOrderedItem  } = this.props
		let className = "rounded bg-secondary"
		if(archivedOrderedItem.status == 'done')
		  className = "rounded bg-success"
		if(archivedOrderedItem.status == 'cancel')
		  className = "rounded bg-danger"
		if(archivedOrderedItem.status == 'cooked')
		  className = "rounded bg-primary"
		let name = archivedOrderedItem.item_name
		let sum = archivedOrderedItem.item_price
		archivedOrderedItem.item_modifiers.map((modifier)=>{
			sum+=modifier.item_modifier_price
			name = name+' '+modifier.item_modifier_name
		})
		return (
		  <div className='row'>
			<div className='col-1 pt-2'><div className={className} style={{width:'10px',height:'10px'}}></div></div>
			<div className='col-5 text-truncate'>{name}</div>
			<div className='col-4'><AppCurrency>{sum}</AppCurrency></div>
			<div className='col-2 text-right'>{archivedOrderedItem.number_of_item}</div>
		  </div>
		)
	}

}