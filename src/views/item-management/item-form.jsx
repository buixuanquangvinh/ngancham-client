import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput, AppSelect } from 'components/common-ui'
import { ItemAction, ItemSelector } from 'features/item'
import { CategorySelector } from 'features/category'

class ItemForm extends Component {

  readFile = (e)=>{
    const reader= new FileReader()
    reader.onload = (event)=>{
      this.props.edit('file',event.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

	render(){
		const { itemForm, edit, create, categoryOptions } = this.props
    const { readFile } = this
  	return (
      <div className='row'>
        <div className='col-12'>
          <img 
            src={itemForm.file?itemForm.file:'http://visitcorralejo.com/wp/wp-content/themes/WPBoots/functions/facebook/img/default_image.png'} 
            style={{width:'100%',maxHeight:'400px',cursor:'pointer'}} 
            onClick={()=>document.getElementById('file-input').click()}
          />
          <input id='file-input' className='invisible' type='file' onChange={readFile}/>
        </div>
        <div className='col-12'>
          <AppInput label='Tên món' value={itemForm.item_name} onChange={(value)=>edit('item_name',value)}/>
          <AppInput label='Description' value={itemForm.item_description} onChange={(value)=>edit('item_description',value)}/>
          <AppSelect label='Danh mục' value={itemForm.category_id} onChange={(value)=>edit('category_id',value)} options={categoryOptions}/>
          <button className='btn btn-primary' onClick={()=>create(itemForm)}>Thêm</button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    itemForm: ItemSelector.getItemForm(state),
    categoryOptions: CategorySelector.getCategoryOption(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:ItemAction.EDIT_ITEM_FORM, payload:{ key:key, value:value } }),
    create: (item) => dispatch({ type:ItemAction.CREATE_ITEM, payload:item })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm)