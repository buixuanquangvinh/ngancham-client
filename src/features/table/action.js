import { MODULE_NAME } from './const'

const ActionType = {
	BOOTSTRAP: 'BOOTSTRAP',
	BOOTSTRAP_SUCCESSED: MODULE_NAME+'BOOTSTRAP_SUCCESSED',

	CREATE_TABLE: MODULE_NAME+'CREATE_TABLE',
	CREATE_TABLE_SUCCESSED: MODULE_NAME+'CREATE_TABLE_SUCCESSED',
	
	SAVE_TABLE: MODULE_NAME+'SAVE_TABLE',
	SAVE_TABLE_SUCCESSED: MODULE_NAME+'SAVE_TABLE_SUCCESSED',

	CHECKOUT_TABLE: MODULE_NAME+'CHECKOUT_TABLE',
	CHECKOUT_TABLE_SUCCESSED: MODULE_NAME+'CHECKOUT_TABLE_SUCCESSED',
	
	EDIT_TABLE_FORM: MODULE_NAME+'EDIT_TABLE_FORM',
	SELECT_TABLE: MODULE_NAME+'SELECT_TABLE',
	SET_ERROR: MODULE_NAME+'SET_ERROR'
}

export default ActionType