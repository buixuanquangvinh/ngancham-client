import React, { Component } from 'react'

import { AppCurrency } from 'components/common-ui'

export default class OrderedItem extends Component {

	render(){
		const { orderedItem, saveOrderedItem, cooked, done, cancel } = this.props
		let className = "rounded bg-secondary"
		if(orderedItem.status == 'done')
		  className = "rounded bg-success"
		if(orderedItem.status == 'cancel')
		  className = "rounded bg-danger"
		if(orderedItem.status == 'cooked')
		  className = "rounded bg-primary"
		let name = orderedItem.item_name
		let sum = orderedItem.item_price
		orderedItem.item_modifiers.map((modifier)=>{
			sum+=modifier.item_modifier_price
			name = name+' '+modifier.item_modifier_name
		})
		return (
		  <div className='d-table-row text-center'>
			<div className='d-table-cell p-1'><div className={className} style={{width:'10px',height:'10px'}}></div></div>
			<div className='d-table-cell p-1'>{name}</div>
			<div className='d-table-cell p-1'><AppCurrency>{sum}</AppCurrency></div>
			<div className='d-table-cell p-1'>{orderedItem.number_of_item}</div>
			<div className='d-table-cell p-1'>
			  {cooked?<button className='btn btn-primary' onClick={()=>saveOrderedItem({...orderedItem,status:'cooked'})}><i className="fas fa-check"></i></button>:null}&nbsp;
			  {done?<button className='btn btn-success' onClick={()=>saveOrderedItem({...orderedItem,status:'done'})}><i className="fas fa-check"></i></button>:null}&nbsp;
			  {cancel?<button className='btn btn-danger' onClick={()=>saveOrderedItem({...orderedItem,status:'cancel'})}><i className="fas fa-times"></i></button>:null}
			</div>
		  </div>
		)
	}

}