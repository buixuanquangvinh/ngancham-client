import { MODULE_NAME } from './const'

const ActionType = {
	BOOTSTRAP: 'BOOTSTRAP',
	BOOTSTRAP_SUCCESSED: MODULE_NAME+'BOOTSTRAP_SUCCESSED',

	CREATE_CATEGORY: MODULE_NAME+'CREATE_CATEGORY',
	CREATE_CATEGORY_SUCCESSED: MODULE_NAME+'CREATE_CATEGORY_SUCCESSED',
	
	SAVE_CATEGORY: MODULE_NAME+'SAVE_CATEGORY',
	SAVE_CATEGORY_SUCCESSED: MODULE_NAME+'SAVE_CATEGORY_SUCCESSED',
	
	SET_ERROR: MODULE_NAME+'SET_ERROR'
}

export default ActionType