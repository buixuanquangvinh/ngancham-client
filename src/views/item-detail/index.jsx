import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ItemSelector } from 'features/item'

import ItemChart from './item-chart'
import ItemForm from './item-form'
import ItemPriceForm from './item-price-form'
import ItemPriceList from './item-price-list'
import ItemModifierForm from './item-modifier-form'
import ItemModifierList from './item-modifier-list'

class ItemDetail extends Component {

	render(){
		const { item } = this.props
		if(item)
		  	return (
		      	<div className="row">
		      		<div className="col-12"><ItemForm {...this.props}/></div>
		        	<div className="col-3">
		        		<ItemChart {...this.props}/>
		        	</div>
		        	<div className='col-6'>
		        		<ItemPriceForm {...this.props}/>
		        		<ItemPriceList {...this.props}/>
		        		<ItemModifierForm {...this.props}/>
		        		<ItemModifierList {...this.props}/>
		        	</div>
		      	</div>
		    )
		 else
		 	return <div>No Item Found</div>
	}

}

const mapStateToProps = (state,props) => {
  return {
    item: ItemSelector.getItem(state,props.params.id)
  }
}

 export default connect(
  mapStateToProps
)(ItemDetail)