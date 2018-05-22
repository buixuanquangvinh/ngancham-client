import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CategoryAction, CategorySelector } from 'features/category'

import { CategoryForm, Category } from 'components/category'

class CategoryManagement extends Component {

	render(){
		const { categoryList, create } = this.props
	  	return (
	      <div className="row">
	        <div className="col-12"><CategoryForm submit={create}/></div>
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
    create: (category) => dispatch({ type:CategoryAction.CREATE_CATEGORY, payload: category })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryManagement)