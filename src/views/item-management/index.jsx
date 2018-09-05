import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ItemSelector } from 'features/item'

import { Item } from 'components/item'

class ItemManagement extends Component {

	render(){
		const { itemList } = this.props
	  	return (
	      	<div className="row">
	        	<div className="col-12 mt-2" style={{height:'90vh',overflow:'auto'}}>
	        		<div className='row'>
		        		{itemList.map((item)=>{
				          return <div className='col-12 col-md-3' key={item.id}><a href={"#/item/"+item.id}><Item item={item}/></a></div>
				        })}
			        </div>
	        	</div>
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
)(ItemManagement)