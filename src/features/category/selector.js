import { MODULE_NAME } from './const'

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getCategoryForm = (state) => state[MODULE_NAME].form;

export const getCategory = (state,id) => state[MODULE_NAME].categories.find((category)=>category.id==id);
export const getCategoryList = (state) => state[MODULE_NAME].categories;
export const getCategoryOption = (state) => [{value:'',label:'không xác định'}].concat(state[MODULE_NAME].categories.map((category)=>{ return {value:category.id, label:category.category_name} }));
