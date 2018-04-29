import { MODULE_NAME } from './const'

const ActionType = {
	BOOTSTRAP: 'BOOTSTRAP',
	BOOTSTRAP_SUCCESSED: MODULE_NAME+'BOOTSTRAP_SUCCESSED',

	CREATE_ROOM: MODULE_NAME+'CREATE_ROOM',
	CREATE_ROOM_SUCCESSED: MODULE_NAME+'CREATE_ROOM_SUCCESSED',
	
	SAVE_ROOM: MODULE_NAME+'SAVE_ROOM',
	SAVE_ROOM_SUCCESSED: MODULE_NAME+'SAVE_ROOM_SUCCESSED',
	
	EDIT_ROOM_FORM: MODULE_NAME+'EDIT_ROOM_FORM',
	SELECT_ROOM: MODULE_NAME+'SELECT_ROOM_FORM',
	SET_ERROR: MODULE_NAME+'SET_ERROR'
}

export default ActionType