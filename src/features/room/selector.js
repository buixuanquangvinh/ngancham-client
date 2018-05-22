import { MODULE_NAME } from './const'

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getRoomForm = (state) => state[MODULE_NAME].form;

export const getRoom = (state,id) =>{
	let rooms = state[MODULE_NAME].rooms.filter((room)=>room.id==id)
	if(rooms.length)
		return rooms[0]
	else
		return {}
};
export const getCurrentRoom = (state) => state[MODULE_NAME].currentRoom;
export const getRoomList = (state) => state[MODULE_NAME].rooms;
export const getRoomOption = (state) => [{value:'',label:'không xác định'}].concat(state[MODULE_NAME].rooms.map((room)=>{ return {value:room.id, label:room.room_name} }));
