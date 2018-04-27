import { MODULE_NAME } from './const'

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;

export const getTableForm = (state) => state[MODULE_NAME].form;

export const getTable = (state,id) => state[MODULE_NAME].tables.filter((table)=>table.id==id)[0];
export const getCurrentTable = (state) => state[MODULE_NAME].currentTable;
export const getTableList = (state) => state[MODULE_NAME].tables;
export const getTableListByRoom = (state,id) => {
	if(id)
		return state[MODULE_NAME].tables.filter((table)=>table.room_id==id)
	else return []
};
export const getTableOption = (state) => [{value:'',label:'không xác định'}].concat(state[MODULE_NAME].tables.map((table)=>{ return {value:table.id, label:table.table_number} }));
