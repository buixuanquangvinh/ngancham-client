import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ItemAction, ItemSelector } from 'features/item'

import ItemModifier from './item-modifier'

class ItemModifierList extends Component {

	render(){
		const { itemModifiers } = this.props
  	return (
      <div className='row'>
        {itemModifiers.map((itemModifier)=>{
          return <div className='col-12' key={itemModifier.id}><ItemModifier itemModifier={itemModifier}/></div>
        })}
      </div>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    itemModifiers: ItemSelector.getItemModifiers(state,props.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemModifierList)