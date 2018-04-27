import { MODULE_NAME } from './const'

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;

export const getCategoryForm = (state) => state[MODULE_NAME].form;

export const getCategory = (state,id) => state[MODULE_NAME].categories.filter((category)=>category.id==id)[0];
export const getCategoryList = (state) => state[MODULE_NAME].categories;
export const getCategoryOption = (state) => [{value:'',label:'không xác định'}].concat(state[MODULE_NAME].categories.map((category)=>{ return {value:category.id, label:category.category_name} }));
