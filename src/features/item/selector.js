import { MODULE_NAME } from './const';

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getItemForm = (state) => state[MODULE_NAME].item_form;
export const getItemModifierForm = (state) => state[MODULE_NAME].item_modifier_form;

export const getItemMaterialList = (state,id) => state[MODULE_NAME].item_materials;
export const getItemList = (state) => state[MODULE_NAME].items;
export const getItemModifierList = (state,id) => state[MODULE_NAME].item_modifiers;

export const getItem = (state,id) => state[MODULE_NAME].items.filter((item)=> item.id == id)[0];
export const getItemModifiers = (state,id) => state[MODULE_NAME].item_modifiers.filter((modifier)=> modifier.item_id == id);