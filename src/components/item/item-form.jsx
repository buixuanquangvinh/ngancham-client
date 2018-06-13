import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppInput, AppSelect } from 'components/common-ui'

export default class ItemForm extends Component {

  constructor(props){
    super(props)
    let form = {
      item_name:'',
      item_description:'',
      category_id:'',
      item_img_url:'',
      file:null
    }
    if(props.item)
      form = {...form,...props.item}
    this.state = form
  }

  edit = (e)=>{
    if(e.target.name=='file'){
      const reader= new FileReader()
      reader.onload = (event)=>{
        this.setState({'file':event.target.result})
      }
      reader.readAsDataURL(e.target.files[0])
    }else 
      this.setState({[e.target.name]:e.target.value})
  }

  submit = ()=>{
    this.props.submit(this.state)
  }

  remove = ()=>{
    this.props.remove(this.state)
  }

	render(){
    const { item_name, item_description, category_id,item_img_url, file } = this.state
		const { item, categoryOptions } = this.props
    const { edit, submit, remove } = this
  	return (
      <div className='row'>
        <div className='col-12'>
          <img 
            src={item_img_url?item_img_url:file?file:'http://visitcorralejo.com/wp/wp-content/themes/WPBoots/functions/facebook/img/default_image.png'} 
            style={{width:'100%',maxHeight:'400px',cursor:'pointer'}} 
            onClick={()=>document.getElementById('file-input').click()}
          />
          <input id='file-input' name='file' className='d-none' type='file' onChange={edit} multiple="multiple"/>
        </div>
        <div className='col-12'>
          <div className='mt-2'><AppInput name='item_name' label='Tên món' value={item_name} onChange={edit}/></div>
          <div className='mt-2'><AppInput name='item_description' label='Description' value={item_description} onChange={edit}/></div>
          <div className='mt-2'><AppSelect name='category_id' label='Danh mục' value={category_id} onChange={edit} options={categoryOptions}/></div>
          <div className='mt-2'><button className='btn btn-primary btn-block' onClick={submit}>Thêm</button></div>
          <div className='mt-2'>{item?<button className='btn btn-danger btn-block' onClick={remove}>Xóa</button>:null}</div>
        </div>
      </div>
    )
	}

}

ItemForm.propTypes = {
  item: PropTypes.object,
  categoryOptions: PropTypes.array,
  submit: PropTypes.func,
  remove: PropTypes.func
}