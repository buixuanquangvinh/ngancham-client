import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppInput } from 'components/common-ui'
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

  render(){
    const { user_name, password } = this.state
    const { edit } = this
    const { login } = this.props
    return (
      <div className="container-fluid" style={{overflow:'hidden',height:'100vh'}}>
        <div className="row" style={{marginTop:'20%'}}>
          <div className='d-none d-md-block col-md-4 text-right pt-5' style={{paddingRight:'100px'}}>
            <div className='d-inline-block bubble' style={{width:'80px'}}></div>
          </div>
          <div className='col-12 col-md-4 card card-body'>
            <div className='mt-2'><AppInput name='user_name' label='username' value={user_name} onChange={edit}/></div>
            <div className='mt-2'><AppInput name='password' label='password' type='password' value={password} onChange={edit}/></div>
            <div className='mt-2'><button className='btn btn-primary btn-block' onClick={()=>login(this.state)}>Login</button></div>
          </div>
          <div className='d-none d-md-block col-md-4 text-left pt-5' style={{paddingLeft:'100px'}}>
            <div className='d-inline-block bubble' style={{width:'80px'}}></div>
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
    login: (form)=> dispatch({ type: LoginAction.LOGIN, payload:form })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)