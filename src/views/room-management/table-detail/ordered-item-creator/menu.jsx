import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CategorySelector } from 'features/category'
import { ItemSelector } from 'features/item'
import { OrderAction } from 'features/order'

import { AppSelect } from 'components/common-ui'
import Item from './item'

class ItemList extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      category:''
    }
  }

	render(){
    const { categoryOption, itemList, addOrderItem } = this.props
    const { category } = this.state
  	return (
      <div className='row'>
        <div className='col-12'><AppSelect label='Category' value={category} options={categoryOption} onChange={(value)=>this.setState({category:value})}/></div>
        {itemList.map((item)=>{
          return <div className='col-6' key={item.id} onClick={()=>addOrderItem(item)}><Item item={item}/></div>
        })}
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    categoryOption: CategorySelector.getCategoryOption(state),
    itemList: ItemSelector.getItemList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOrderItem: (item)=> dispatch({ type:OrderAction.ADD_ORDER_ITEM, payload:item })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)