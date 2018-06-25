import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput, AppMultiSelect } from 'components/common-ui'
import { LoginAction, LoginSelector } from 'features/login'

class MyProfile extends Component {

  constructor(props){
    super(props)
    this.state = {
      old_password:'',
      new_password:'',
      confirm_new_password:''
    }
  }

  edit = (e)=>{
    this.setState({ [e.target.name]:e.target.value })
  }

  render(){
    const { old_password, new_password, confirm_new_password } = this.state
    const { edit } = this
    const { updatePassword } = this.props
    const user = JSON.parse(localStorage.user)
    const roles = user.roles.map((role)=>{
      return { label:role, value:role } 
    })
    return (
      <div className='card'>
        <div className='card-body'>
          <div className="row">
            <div className='col-4 mt-1'>{user.user_name}</div>
            <div className='col-8 mt-1 text-align-left'><AppMultiSelect label='roles' value={user.roles} options={roles} disabled={true}/></div>
            <div className='col-12 mt-1'>
              <button className="btn btn-info btn-block" data-toggle="collapse" data-target="#password_form"><i className="fas fa-angle-down"></i></button>
            </div>
            <div className='col-12 collapse mt-1' id='password_form'>
              <div className='row'>
                <div className='col-12 col-md-6 mt-1'>
                  <AppInput label='Old Password' name='old_password' value={old_password} type='password' onChange={edit}/>
                </div>
                <div className='col-12 col-md-6 mt-1'>
                  <AppInput label='New Password' name='new_password' value={new_password} type='password' onChange={edit}/>
                </div>
                <div className='col-12 col-md-6 mt-1'>
                  <AppInput label='Confirm New Password' name='confirm_new_password' value={confirm_new_password} type='password' onChange={edit}/>
                </div>
                <div className='col-12 col-md-6 mt-1'>
                  <button className='btn btn-block btn-primary' onClick={()=>updatePassword(this.state)}>Thay đổi password</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePassword: (password_form)=> dispatch({ type:LoginAction.UPDATE_PASSWORD, payload:password_form })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfile)