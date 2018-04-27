import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ItemAction, ItemSelector } from 'features/item'

class ItemPrice extends Component {

	render(){
		const { itemPrice, remove } = this.props
  	return (
      <div className='row mb-1'>
        <div className='col-5'><div className='border rounded' style={{padding:'6px'}}>{itemPrice.item_price_name}</div></div>
        <div className='col-5'><div className='border rounded' style={{padding:'6px'}}>{itemPrice.item_price}</div></div>
        <div className='col-2'>
          <button className='btn btn-danger btn-block' onClick={()=>remove(itemPrice)}><i className='fas fa-times'></i></button>
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
    remove: (itemPrice)=> dispatch({ type:ItemAction.REMOVE_ITEM_PRICE, payload:itemPrice })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPrice)