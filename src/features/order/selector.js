import { MODULE_NAME } from './const';

export const getBootstraped = (state) => state[MODULE_NAME].bootstraped;
export const getLoading = (state) => state[MODULE_NAME].loading;

export const getCurrentOrder = (state) => state[MODULE_NAME].currentOrder;
export const getOrder = (state,id) =>{
	const orders = state[MODULE_NAME].orders.filter((order)=> order.id==id)
	if(orders.length)
		return orders[0]
	else
		return {}
};
export const getOrderListByRoom = (state,id)=>state[MODULE_NAME].orders.filter((order)=> order.room_id==id);
export const getOrderedItemByOrder = (state,id) =>{
	return state[MODULE_NAME].ordered_items.filter((ordered_item)=>ordered_item.order_id==id)
};
export const getOrderedItemByRoom = (state,id) =>{
	let orders = state[MODULE_NAME].orders.filter((order)=>order.room_id==id)
	orders = orders.map((order)=> order.id)
	return state[MODULE_NAME].ordered_items.filter((ordered_item)=>orders.indexOf(ordered_item.order_id)>=0)
};
export const getOrderedItemList = (state) => state[MODULE_NAME].ordered_items;
export const getOrderItemList = (state) => state[MODULE_NAME].order_items;

export const getAvailableOrder = (state) => state[MODULE_NAME].orders.filter((order)=> order.room_id==null);