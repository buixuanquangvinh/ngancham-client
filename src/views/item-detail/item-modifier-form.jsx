import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput } from 'components/common-ui'
import { ItemAction, ItemSelector } from 'features/item'

class ItemModifierForm extends Component {

	render(){
		const { itemModifierForm, edit, create, params } = this.props
  	return (
      <div className='row'>
        <div className='col-sm-5'><AppInput label='Tên Mod' value={itemModifierForm.item_modifier_name} onChange={(value)=>edit('item_modifier_name',value)}/></div>
        <div className='col-sm-5'><AppInput label='Giá' value={itemModifierForm.item_modifier_price} onChange={(value)=>edit('item_modifier_price',value)}/></div>
        <div className='col-sm-2'>
          <button className='btn btn-success btn-block' onClick={()=>create({...itemModifierForm,item_id:params.id})}><i className='fas fa-save'></i></button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    itemModifierForm: ItemSelector.getItemModifierForm(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value)=>dispatch({ type:ItemAction.EDIT_ITEM_MODIFIER_FORM, payload:{ key:key, value:value } }),
    create: (form)=> dispatch({ type:ItemAction.CREATE_ITEM_MODIFIER, payload:form })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemModifierForm)