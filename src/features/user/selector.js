import { MODULE_NAME } from './const'

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getUser = (state,id) => state[MODULE_NAME].users.filter((user)=>user.id==id)[0];
export const getUserList = (state) => state[MODULE_NAME].users;
export const getRoleList = (state) => state[MODULE_NAME].roles;
export const getUserRoleList = (state) => state[MODULE_NAME].user_roles;

export const getUserRole = (state,id) =>{
	return state[MODULE_NAME].user_roles.filter((user_role)=>user_role.user_id==id).map((user_role)=> user_role.role_id)
};
export const getCategoryOption = (state) => [{value:'',label:'không xác định'}].concat(state[MODULE_NAME].categories.map((category)=>{ return {value:category.id, label:category.category_name} }));
