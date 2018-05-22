import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ItemAction, ItemSelector } from 'features/item'
import { CategorySelector } from 'features/category'

import { ItemForm, Item } from 'components/item'

class ItemManagement extends Component {

	render(){
		const { itemList, categoryOptions, create } = this.props
	  	return (
	      	<div className="row">
	        	<div className="col-12 col-md-3"><ItemForm categoryOptions={categoryOptions} submit={create}/></div>
	        	<div className="col-12 col-md-9">
	        		<div className='row'>
		        		{itemList.map((item)=>{
				          return <div className='col-6 col-md-3' key={item.id}><a href={"#/item/"+item.id}><Item item={item}/></a></div>
				        })}
			        </div>
	        	</div>
	      	</div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
  	itemList: ItemSelector.getItemList(state),
    categoryOptions: CategorySelector.getCategoryOption(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (item) => dispatch({ type:ItemAction.CREATE_ITEM, payload:item })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemManagement)