import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CategorySelector } from 'features/category'
import { ItemAction, ItemSelector } from 'features/item'
import { MaterialAction, MaterialSelector } from 'features/material'

import { ItemForm, ItemMaterialForm, ItemModifierForm } from 'components/item'

class ItemDetail extends Component {

	render(){
		const { item, itemModifiers, itemMaterials, categoryOptions, materialOptions, save, remove, createModifier, saveModifier, removeModifier, createItemMaterial, removeItemMaterial } = this.props
		if(item)
		  	return (
		      	<div className="row">
		      		<div className="col-12 col-md-5 mt-2">
		      			<ItemForm item={item} categoryOptions={categoryOptions} submit={save} remove={remove}/>
		      		</div>
		        	<div className='col-12 col-md-7 mt-2'>
		        		<ItemModifierForm item={item} submit={createModifier}/>
		        		{itemModifiers.map((itemModifier)=>{
				          return <ItemModifierForm key={itemModifier.id} item={item} itemModifier={itemModifier} submit={saveModifier} remove={removeModifier}/>
				        })}
				        <ItemMaterialForm item={item} materialOptions={materialOptions} submit={createItemMaterial}/>
		        		{itemMaterials.map((itemMaterial)=>{
				          return <ItemMaterialForm key={itemMaterial.id} item={item} itemMaterial={itemMaterial} materialOptions={materialOptions} remove={removeItemMaterial}/>
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
    itemMaterials: ItemSelector.getItemMaterialList(state),
    materialOptions: MaterialSelector.getMaterialOption(state),
    categoryOptions: CategorySelector.getCategoryOption(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: (item) => dispatch({ type:ItemAction.SAVE_ITEM, payload:item }),
    remove: (item) => dispatch({ type:ItemAction.REMOVE_ITEM, payload:item }),
    createItemMaterial: (form)=> dispatch({ type:ItemAction.CREATE_ITEM_MATERIAL, payload:form }),
    removeItemMaterial: (form)=> dispatch({ type:ItemAction.REMOVE_ITEM_MATERIAL, payload:form }),
    createModifier: (form)=> dispatch({ type:ItemAction.CREATE_ITEM_MODIFIER, payload:form }),
    saveModifier: (form)=> dispatch({ type:ItemAction.SAVE_ITEM_MODIFIER, payload:form }),
    removeModifier: (itemModifier)=> dispatch({ type:ItemAction.REMOVE_ITEM_MODIFIER, payload:itemModifier })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail)