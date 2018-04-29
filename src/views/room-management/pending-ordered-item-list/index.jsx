import React, { Component } from 'react'
import { AppSection } from 'components/common-ui'
import OrderedItemList from './ordered-item-list'

export default class PendingOrderedItemList extends Component {

	render(){
	  	return (
	  		<AppSection label='Danh sách đồ chưa hoàn thành của phòng'>
		      	<div className='row' style={{height:'460px',overflow:'auto'}}>
		      		<div className='col-12'><OrderedItemList/></div>
		      	</div>
	      	</AppSection>
	    )
	}

}