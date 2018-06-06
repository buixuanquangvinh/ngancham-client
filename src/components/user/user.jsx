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
      <div className='card mt-2'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-9 col-md-5'>{user.user_name}</div>
            <div className='col-3 col-md-2 text-right'>
              <button className='btn btn-danger' onClick={remove}><i className="fas fa-times"></i></button>
            </div>
            <div className='col-12 col-md-5'>
              <AppMultiSelect label='roles' value={user_role} options={roleOptions} onChange={edit} compact={true}/>
            </div>
          </div>
        </div>
      </div>
    )
	}

}