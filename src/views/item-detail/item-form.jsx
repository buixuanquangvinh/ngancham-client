import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput, AppSelect } from 'components/common-ui'
import { ItemAction, ItemSelector } from 'features/item'
import { CategorySelector } from 'features/category'

class ItemForm extends Component {

  componentDidMount(){
    const { edit, item } = this.props
    edit('item_name',item.item_name)
    edit('item_img_url',item.item_img_url)
    edit('item_description',item.item_description)
    edit('category_id',item.category_id)
  }

  readFile = (e)=>{
    const reader= new FileReader()
    reader.onload = (event)=>{
      this.props.edit('file',event.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

	render(){
		const { item, itemForm, edit, save, remove, categoryOptions } = this.props
    const { readFile } = this
  	return (
      <div className='row'>
        <div className='col-4'>
          <img 
            src={itemForm.item_img_url?itemForm.item_img_url:itemForm.file?itemForm.file:'http://visitcorralejo.com/wp/wp-content/themes/WPBoots/functions/facebook/img/default_image.png'} 
            style={{width:'100%',maxHeight:'400px',cursor:'pointer'}} 
            onClick={()=>document.getElementById('file-input').click()}
          />
          <input id='file-input' type='file' onChange={readFile} style={{display:'none'}}/>
        </div>
        <div className='col-6'>
          <AppInput label='Tên món' value={itemForm.item_name} onChange={(value)=>edit('item_name',value)}/>
          <AppInput label='Description' value={itemForm.item_description} onChange={(value)=>edit('item_description',value)}/>
          <AppSelect label='Danh mục' value={itemForm.category_id} onChange={(value)=>edit('category_id',value)} options={categoryOptions}/>
          <div className='row'>
            <div className='col-6'><button className='btn btn-success btn-block' onClick={()=>save({...itemForm,id:item.id})}><i className='fas fa-save'></i></button></div>
            <div className='col-6'><button className='btn btn-danger btn-block' onClick={()=>remove({...itemForm,id:item.id})}><i className='fas fa-times'></i></button></div>
          </div>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state,props) => {
  return {
    item: ItemSelector.getItem(state,props.params.id),
    itemForm: ItemSelector.getItemForm(state),
    categoryOptions: CategorySelector.getCategoryOption(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:ItemAction.EDIT_ITEM_FORM, payload:{ key:key, value:value } }),
    save: (item) => dispatch({ type:ItemAction.SAVE_ITEM, payload:item }),
    remove: (item) => dispatch({ type:ItemAction.REMOVE_ITEM, payload:item })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemForm)