import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput } from 'components/common-ui'
import { UserAction, UserSelector } from 'features/user'

class UserForm extends Component {

	render(){
    const { userForm, edit, create } = this.props
  	return (
      <div className='row'>
        <div className='col-6'>
          <AppInput label='Tên đăng nhập' value={userForm.user_name} onChange={(value)=>edit('user_name',value)}/>
        </div>
        <div className='col-6'>
          <button className='btn btn-primary' onClick={()=>create(userForm)}>Tạo</button>
        </div>
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    userForm: UserSelector.getUserForm(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value) => dispatch({ type:UserAction.EDIT_USER_FORM, payload:{ key:key, value:value } }),
    create: (user) => dispatch({ type:UserAction.CREATE_USER, payload: user })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)