import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UserSelector } from 'features/user'

import User from './user'

class UserList extends Component {

	render(){
    const { userList } = this.props
  	return (
      <div className='row'>
        {userList.map((user)=>{
          return <div className='col-12' key={user.id}><User user={user}/></div>
        })}
      </div>
    )
	}

}

const mapStateToProps = (state) => {
  return {
    userList: UserSelector.getUserList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)