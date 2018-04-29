import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ItemSelector } from 'features/item'
import { OrderAction } from 'features/order'

class OrderedItem extends Component {

	render(){
		const { orderedItem, saveOrderedItem } = this.props
    let className = "rounded bg-secondary"
    if(orderedItem.status == 'done')
      className = "rounded bg-success"
    if(orderedItem.status == 'cancel')
      className = "rounded bg-danger"
  	return (
      <div className='d-table-row text-center'>
        <div className='d-table-cell p-1'><div className={className} style={{width:'10px',height:'10px'}}></div></div>
        <div className='d-table-cell p-1'>{orderedItem.item_name}</div>
        <div className='d-table-cell p-1'>{orderedItem.item_price}</div>
        <div className='d-table-cell p-1'>
          {orderedItem.item_modifiers.map((modifier)=>{
            return <div key={modifier.id} className='border rounded d-inline-block pl-2 pr-2 bg-info'>{modifier.item_modifier_name}</div>
          })}
        </div>
        <div className='d-table-cell p-1'>{orderedItem.number_of_item}</div>
        <div className='d-table-cell p-1'>
          <button className='btn btn-success' onClick={()=>saveOrderedItem({...orderedItem,status:'done'})}><i className="fas fa-check"></i></button>&nbsp;
          <button className='btn btn-danger' onClick={()=>saveOrderedItem({...orderedItem,status:'cancel'})}><i className="fas fa-times"></i></button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrderedItem: (ordered_item)=> dispatch({ type:OrderAction.SAVE_ORDERED_ITEM, payload:ordered_item }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedItem)