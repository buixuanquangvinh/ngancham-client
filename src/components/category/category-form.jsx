import React, { Component } from 'react'
import { AppInput } from 'components/common-ui'

export default class CategoryForm extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      category_name:''
    }
  }

  edit = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submit = ()=>{
    this.props.submit(this.state)
  }

	render(){
    const { category_name } = this.state
    const { edit, submit } = this
  	return (
      <div className='row'>
        <div className='col-6'>
          <AppInput name='category_name' label='Tên danh mục' value={category_name} onChange={edit}/>
        </div>
        <div className='col-6'>
          <button className='btn btn-primary' onClick={submit}>Tạo</button>
        </div>
      </div>
    )
	}

}