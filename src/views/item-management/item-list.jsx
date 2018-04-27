import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ItemAction, ItemSelector } from 'features/item'

import Item from './item'

class ItemList extends Component {

	render(){
    const { itemList } = this.props
  	return (
      <div className='row'>
        {itemList.map((item)=>{
          return <div className='col-2' key={item.id}><Item item={item}/></div>
        })}
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    itemList: ItemSelector.getItemList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)