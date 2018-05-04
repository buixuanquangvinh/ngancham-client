import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput } from 'components/common-ui'
import { LoginAction, LoginSelector } from 'features/login'

class Login extends Component {

  render(){
    const { form, edit, login } = this.props
    return (
      <div className="container-fluid" style={{overflow:'hidden',height:'100vh'}}>
        <div className="row" style={{marginTop:'20%'}}>
          <div className='col-4 text-right pt-5' style={{paddingRight:'100px'}}>
            <div className='d-inline-block bubble' style={{width:'80px'}}></div>
          </div>
          <div className='col-4 card card-body'>
            <AppInput label='username' value={form.user_name} onChange={(value)=>edit('user_name',value)}/>
            <AppInput label='password' type='password' value={form.password} onChange={(value)=>edit('password',value)}/>
            <button className='btn btn-primary' onClick={()=>login(form)}>Login</button>
          </div>
          <div className='col-4 text-left pt-5' style={{paddingLeft:'100px'}}>
            <div className='d-inline-block bubble' style={{width:'80px'}}></div>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    form: LoginSelector.getLoginForm(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (key,value)=> dispatch({ type: LoginAction.EDIT_LOGIN_FORM, payload:{ key:key, value:value } }),
    login: (form)=> dispatch({ type: LoginAction.LOGIN, payload:form })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)