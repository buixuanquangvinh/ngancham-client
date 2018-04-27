import { MODULE_NAME } from './const';

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getOrder = (state,id) =>{
	const orders = state[MODULE_NAME].orders.filter((order)=> order.id==id)
	if(orders.length)
		return orders[0]
	else
		return {}
};
export const getOrderByTable = (state,id) => state[MODULE_NAME].orders.filter((order)=> order.table_id==id);
export const getOrderedItemByTable = (state,id) =>{
	let orders = state[MODULE_NAME].orders.filter((order)=> order.table_id==id).map((order)=>order.id)
	return state[MODULE_NAME].ordered_items.filter((ordered_item)=>orders.indexOf(ordered_item.order_id)>=0)
};
export const getOrderForm = (state) => state[MODULE_NAME].form;
export const getOrderedItemList = (state) => state[MODULE_NAME].ordered_items;
export const getOrderItemList = (state) => state[MODULE_NAME].order_items;

export const getAvailableOrder = (state) => state[MODULE_NAME].orders.filter((order)=> order.table_id==null);