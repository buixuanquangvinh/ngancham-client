import React, { Component } from 'react'
import { AppInput } from 'components/common-ui'

export default class RoomForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      room_name:''
    }
  }

  edit = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  submit = ()=>{
    this.props.submit(this.state)
  }

  render(){
    const { room_name } = this.state
    const { edit, submit } = this
    return (
        <div className='row'>
          <div className='col-9'>
            <AppInput name='room_name' label='Tên phòng' value={room_name} onChange={edit}/>
          </div>
          <div className='col-3 text-right'>
            <button className='btn btn-primary' onClick={submit}>Tạo</button>
          </div>
        </div>
    )
  }

}