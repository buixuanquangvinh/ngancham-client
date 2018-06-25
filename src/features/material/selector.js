import { MODULE_NAME } from './const'

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getMaterial = (state,id) => state[MODULE_NAME].materials.filter((material)=>material.id==id)[0];
export const getMaterialList = (state) => state[MODULE_NAME].materials;
export const getMaterialOption = (state) => state[MODULE_NAME].materials.map((material)=>{ return {value:material.id, label:material.material_name} });
