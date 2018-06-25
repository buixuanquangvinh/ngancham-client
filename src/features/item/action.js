import { MODULE_NAME } from './const'

const ActionType = {
	BOOTSTRAP: 'BOOTSTRAP',
	BOOTSTRAP_SUCCESSED: MODULE_NAME+'BOOTSTRAP_SUCCESSED',

	CREATE_ITEM: MODULE_NAME+'CREATE_ITEM',
	CREATE_ITEM_SUCCESSED: MODULE_NAME+'CREATE_ITEM_SUCCESSED',
	SAVE_ITEM: MODULE_NAME+'SAVE_ITEM',
	SAVE_ITEM_SUCCESSED: MODULE_NAME+'SAVE_ITEM_SUCCESSED',
	REMOVE_ITEM: MODULE_NAME+'REMOVE_ITEM',
	REMOVE_ITEM_SUCCESSED: MODULE_NAME+'REMOVE_ITEM_SUCCESSED',

	CREATE_ITEM_MATERIAL: MODULE_NAME+'CREATE_ITEM_MATERIAL',
	CREATE_ITEM_MATERIAL_SUCCESSED: MODULE_NAME+'CREATE_ITEM_MATERIAL_SUCCESSED',
	REMOVE_ITEM_MATERIAL: MODULE_NAME+'REMOVE_ITEM_MATERIAL',
	REMOVE_ITEM_MATERIAL_SUCCESSED: MODULE_NAME+'REMOVE_ITEM_MATERIAL_SUCCESSED',

	CREATE_ITEM_MODIFIER: MODULE_NAME+'CREATE_ITEM_MODIFIER',
	CREATE_ITEM_MODIFIER_SUCCESSED: MODULE_NAME+'CREATE_ITEM_MODIFIER_SUCCESSED',
	SAVE_ITEM_MODIFIER: MODULE_NAME+'SAVE_ITEM_MODIFIER',
	SAVE_ITEM_MODIFIER_SUCCESSED: MODULE_NAME+'SAVE_ITEM_MODIFIER_SUCCESSED',
	REMOVE_ITEM_MODIFIER: MODULE_NAME+'REMOVE_ITEM_MODIFIER',
	REMOVE_ITEM_MODIFIER_SUCCESSED: MODULE_NAME+'REMOVE_ITEM_MODIFIER_SUCCESSED',

	SET_ERROR: MODULE_NAME+'SET_ERROR'
}

export default ActionType