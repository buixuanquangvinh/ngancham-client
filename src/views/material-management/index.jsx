import React, { Component } from 'react'
import { connect } from 'react-redux'

import { MaterialAction, MaterialSelector } from 'features/material'

import { Material } from 'components/material'

class MaterialManagement extends Component {

	render(){
		const { materialList, buy } = this.props
	  	return (
	      	<div className="row">
	        	<div className="col-12 mt-2" style={{height:'90vh',overflow:'auto'}}>
	        		<div className='row'>
		        		{materialList.map((material)=>{
				          return <div className='col-12 col-md-3' key={material.id}><Material material={material} submit={buy}/></div>
				        })}
			        </div>
	        	</div>
	      	</div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
  	materialList: MaterialSelector.getMaterialList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buy: (transaction) => dispatch({ type:MaterialAction.BUY_MATERIAL, payload:transaction })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialManagement)