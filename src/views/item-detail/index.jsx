import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CategorySelector } from 'features/category'
import { ItemAction, ItemSelector } from 'features/item'

import { ItemForm, ItemPriceForm, ItemModifierForm } from 'components/item'

class ItemDetail extends Component {

	render(){
		const { item, itemModifiers, itemPrices, categoryOptions, save, remove, createModifier, saveModifier, removeModifier, createPrice, savePrice, removePrice } = this.props
		if(item)
		  	return (
		      	<div className="row">
		      		<div className="col-12 col-md-5">
		      			<ItemForm item={item} categoryOptions={categoryOptions} submit={save} remove={remove}/>
		      		</div>
		        	<div className='col-12 col-md-7'>
		        		<ItemPriceForm item={item} submit={createPrice}/>
		        		{itemPrices.map((itemPrice)=>{
				          return <ItemPriceForm key={itemPrice.id} item={item} itemPrice={itemPrice} submit={savePrice} remove={removePrice}/>
				        })}
		        		<ItemModifierForm item={item} submit={createModifier}/>
		        		{itemModifiers.map((itemModifier)=>{
				          return <ItemModifierForm key={itemModifier.id} item={item} itemModifier={itemModifier} submit={saveModifier} remove={removeModifier}/>
				        })}
		        	</div>
		      	</div>
		    )
		 else
		 	return <div>No Item Found</div>
	}

}

const mapStateToProps = (state,props) => {
  return {
    item: ItemSelector.getItem(state,props.params.id),
    itemModifiers: ItemSelector.getItemModifiers(state,props.params.id),
    itemPrices: ItemSelector.getItemPrices(state,props.params.id),
    categoryOptions: CategorySelector.getCategoryOption(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: (item) => dispatch({ type:ItemAction.SAVE_ITEM, payload:item }),
    remove: (item) => dispatch({ type:ItemAction.REMOVE_ITEM, payload:item }),

    createModifier: (form)=> dispatch({ type:ItemAction.CREATE_ITEM_MODIFIER, payload:form }),
    saveModifier: (form)=> dispatch({ type:ItemAction.SAVE_ITEM_MODIFIER, payload:form }),
    removeModifier: (itemModifier)=> dispatch({ type:ItemAction.REMOVE_ITEM_MODIFIER, payload:itemModifier }),

    createPrice: (form)=> dispatch({ type:ItemAction.CREATE_ITEM_PRICE, payload:form }),
    savePrice: (form)=> dispatch({ type:ItemAction.SAVE_ITEM_PRICE, payload:form }),
    removePrice: (itemPrice)=> dispatch({ type:ItemAction.REMOVE_ITEM_PRICE, payload:itemPrice })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail)