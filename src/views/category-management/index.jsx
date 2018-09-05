import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CategorySelector } from 'features/category'

import { Category } from 'components/category'

class CategoryManagement extends Component {

	render(){
		const { categoryList } = this.props
	  	return (
	      <div className="row">
        	{categoryList.map((category)=>{
	          return <div className='col-12' key={category.id}><Category category={category}/></div>
	        })}
	      </div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
  	categoryList: CategorySelector.getCategoryList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryManagement)