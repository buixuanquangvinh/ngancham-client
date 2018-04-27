import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ItemAction, ItemSelector } from 'features/item'

import ItemPrice from './item-price'

class ItemPriceList extends Component {

	render(){
		const { itemPrices } = this.props
  	return (
      <div className='row'>
        {itemPrices.map((itemPrice)=>{
          return <div className='col-12' key={itemPrice.id}><ItemPrice itemPrice={itemPrice}/></div>
        })}
      </div>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    itemPrices: ItemSelector.getItemPrices(state,props.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPriceList)