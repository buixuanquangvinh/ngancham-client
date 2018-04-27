import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput } from 'components/common-ui'
import { CategoryAction, CategorySelector } from 'features/category'

class CategoryForm extends Component {

	render(){
    const { categoryForm, edit, create } = this.props
  	return (
      <div className='row'>
        <div className='col-6'>
          <AppInput label='Tên danh mục' value={categoryForm.category_name} onChange={(value)=>edit('category_name',value)}/>
        </div>
        <div className='col-6'>
          <button className='btn btn-primary' onClick={()=>create(categoryForm)}>Tạo</button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    categoryForm: CategorySelector.getCategoryForm(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:CategoryAction.EDIT_CATEGORY_FORM, payload:{ key:key, value:value } }),
    create: (category) => dispatch({ type:CategoryAction.CREATE_CATEGORY, payload: category })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryForm)