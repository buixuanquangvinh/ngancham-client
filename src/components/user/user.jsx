import React, { Component } from 'react'

import { AppMultiSelect } from 'components/common-ui'

export default class User extends Component {

  edit = (value)=>{
    this.props.updateRole(this.props.user.id,value)
  }

  remove = ()=>{
    this.props.remove(this.props.user)
  }

	render(){
		const { user, user_role, roleOptions } = this.props
    const { edit, remove } = this
  	return (
      <div className='d-table-row'>
        <div className='d-table-cell'>{user.user_name}</div>
        <div className='d-table-cell'>
          <AppMultiSelect label='roles' value={user_role} options={roleOptions} onChange={edit} compact={true}/>
        </div>
        <div className='d-table-cell'><button className='btn btn-danger' onClick={remove}><i className="fas fa-times"></i></button></div>
      </div>
    )
	}

}