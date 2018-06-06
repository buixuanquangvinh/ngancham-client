import React, { Component } from 'react'
import { AppInput } from 'components/common-ui'

export default class UserForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      user_name:'',
      password:'12345678'
    }
  }

  edit = (e)=>{
    this.setState({ [e.target.name]:e.target.value })
  }

  submit = ()=>{
    this.props.submit(this.state)
  }

	render(){
    const { user_name } = this.state
    const { edit, submit } = this
  	return (
      <div className='row'>
        <div className='col-8'>
          <AppInput name='user_name' label='Tên đăng nhập' value={user_name} onChange={edit}/>
        </div>
        <div className='col-4'>
          <button className='btn btn-primary btn-block' onClick={submit}>Tạo</button>
        </div>
      </div>
    )
	}

}