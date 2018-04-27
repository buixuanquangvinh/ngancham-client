import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput } from 'components/common-ui'

import { ItemAction, ItemSelector } from 'features/item'

class ItemPriceForm extends Component {

	render(){
		const { itemPriceForm, edit, create, params } = this.props
  	return (
      <div className='row'>
        <div className='col-sm-5'><AppInput label='Tên giá' value={itemPriceForm.item_price_name} onChange={(value)=>edit('item_price_name',value)}/></div>
        <div className='col-sm-5'><AppInput label='Giá' value={itemPriceForm.item_price} onChange={(value)=>edit('item_price',value)}/></div>
        <div className='col-sm-2'>
          <button className='btn btn-success btn-block' onClick={()=>create({...itemPriceForm,item_id:params.id})}><i className='fas fa-save'></i></button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    itemPriceForm: ItemSelector.getItemPriceForm(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value)=>dispatch({ type:ItemAction.EDIT_ITEM_PRICE_FORM, payload:{ key:key, value:value } }),
    create: (form)=> dispatch({ type:ItemAction.CREATE_ITEM_PRICE, payload:form })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPriceForm)