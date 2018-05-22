import React, { Component } from 'react'
import { connect } from 'react-redux'

import { UserAction, UserSelector } from 'features/user'

import { User, UserForm } from 'components/user'

class UserManagement extends Component {

	render(){
		const { userList, userRoleList, roleOptions, create, updateRole, removeUser } = this.props
	  	return (
	      <div className="row">
	        <div className="col-12"><UserForm submit={create}/></div>
	        <div className="col-12 d-table">
	          {userList.map((user)=>{
	          	let user_role = userRoleList.filter((user_role)=>user_role.user_id==user.id).map((user_role)=>user_role.role_id)
	            return <User key={user.id} user={user} user_role={user_role} roleOptions={roleOptions} updateRole={updateRole} remove={removeUser}/>
	          })}
	        </div>
	      </div>
	    )
	}

}

const mapStateToProps = (state) => {
  return {
    userList: UserSelector.getUserList(state),
    userRoleList: UserSelector.getUserRoleList(state),
    roleOptions: UserSelector.getRoleList(state).map((role)=>{ return { value:role.id, label:role.role_name } })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    create: (user) => dispatch({ type:UserAction.CREATE_USER, payload: user }),
    updateRole: (user_id,role_ids)=>dispatch({type:UserAction.UPDATE_USER_ROLE, payload:{ user_id:user_id, role_ids:role_ids } }),
    removeUser: (user)=>dispatch({type:UserAction.REMOVE_USER, payload:user })
  }
}

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagement)