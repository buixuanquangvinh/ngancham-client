import { MODULE_NAME } from './const'

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getUserForm = (state) => state[MODULE_NAME].form;

export const getUser = (state,id) => state[MODULE_NAME].users.filter((user)=>user.id==id)[0];
export const getUserList = (state) => state[MODULE_NAME].users;
export const getCategoryOption = (state) => [{value:'',label:'không xác định'}].concat(state[MODULE_NAME].categories.map((category)=>{ return {value:category.id, label:category.category_name} }));
