import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppLoadingOverlay, AppInput } from 'components/common-ui'
import { LoginAction, LoginSelector } from 'features/login'

class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      user_name:'',
      password:''
    }
  }

  edit = (e)=>{
    this.setState({ [e.target.name]:e.target.value })
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    const { login } = this.props
    login(this.state)
  }

  render(){
    const { loading } = this.props
    const { user_name, password } = this.state
    const { edit, handleSubmit } = this
    return (
      <AppLoadingOverlay loading={loading}>
      <div className="container-fluid">
        <form onSubmit={handleSubmit} className='card card-body' style={{marginTop:'30%'}}>
          <div className='mt-2'><AppInput name='user_name' label='username' value={user_name} onChange={edit}/></div>
          <div className='mt-2'><AppInput name='password' label='password' type='password' value={password} onChange={edit}/></div>
          <div className='mt-2'><button type="submit" className='btn btn-primary btn-block'>Login</button></div>
        </form>
      </div>
      </AppLoadingOverlay>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    loading: LoginSelector.getLoading(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (form)=> dispatch({ type: LoginAction.LOGIN, payload:form })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)