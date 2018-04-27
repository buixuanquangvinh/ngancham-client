import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ItemAction, ItemSelector } from 'features/item'

class ItemModifier extends Component {

	render(){
		const { itemModifier, remove } = this.props
  	return (
      <div className='row mb-1'>
        <div className='col-5'><div className='border rounded' style={{padding:'6px'}}>{itemModifier.item_modifier_name}</div></div>
        <div className='col-5'><div className='border rounded' style={{padding:'6px'}}>{itemModifier.item_modifier_price}</div></div>
        <div className='col-2'>
          <button className='btn btn-danger btn-block' onClick={()=>remove(itemModifier)}><i className='fas fa-times'></i></button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (itemModifier)=> dispatch({ type:ItemAction.REMOVE_ITEM_MODIFIER, payload:itemModifier })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemModifier)