import Swal from 'sweetalert2'
import ActionType from './action'
import { printReceipt } from 'ulti'

const initialState = {
  bootstraped:false,
  loading: false,
  error:'',
  currentOrder:{},
  orders: [],
  ordered_items: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state, loading: true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, bootstraped: true, loading: false, ...action.payload}

    case ActionType.CREATE_ORDER:
      return {...state, loading: true}
    case ActionType.CREATE_ORDER_SUCCESSED:
      Swal('THÀNH CÔNG','đã tạo order', 'success')
      return {...state, loading: false}

    case ActionType.CREATE_ORDERED_ITEM:
      Swal('THÀNH CÔNG','đã thêm đồ', 'success')
      return {...state, loading: true}
    case ActionType.CREATE_ORDERED_ITEM_SUCCESSED:
      return {...state, loading: false}

    case ActionType.SAVE_ORDER:
      return {...state, loading: true}
    case ActionType.SAVE_ORDER_SUCCESSED:
      return {...state, loading: false}

    case ActionType.SELECT_ORDER:{
      return {...state,currentOrder:action.payload}
    }

    case ActionType.CHECKOUT_ORDER:
      return {...state, loading:true}
    case ActionType.CHECKOUT_ORDER_SUCCESSED:{
      printReceipt(action.payload)
      return {...state, loading:false}
    }

    case ActionType.SAVE_ORDERED_ITEM:
      return {...state, loading: true}
    case ActionType.SAVE_ORDERED_ITEM_SUCCESSED:
      return {...state, loading: false}

    case ActionType.SOCKET_UPDATE:{
      const { orders, ordered_items } = state
      const { action_type, data } = action.payload
      if(action_type=='create_order'){
        const new_ordered_items = data.ordered_items.map((ordered_item)=>{
          return {...ordered_item,item_modifiers:JSON.parse(ordered_item.item_modifiers)}
        })
        return {...state,orders:[...orders,data.order],ordered_items:[...ordered_items,...new_ordered_items]}
      }
      if(action_type=='update_order'){
        const newOrders = state.orders.map((order)=>{
          if(order.id==data.order.id)
            return data.order
          else
            return order
        })
        return {...state,orders:newOrders}
      }
      if(action_type=='create_ordered_item'){
        const new_ordered_items = data.ordered_items.map((ordered_item)=>{
          return {...ordered_item,item_modifiers:JSON.parse(ordered_item.item_modifiers)}
        })
        return {...state,ordered_items:[...ordered_items,...new_ordered_items]}
      }
      if(action_type=='update_ordered_item'){
        const new_ordered_items = ordered_items.map((ordered_item)=>{
          if(ordered_item.id==data.ordered_item.id)
            return {...data.ordered_item,item_modifiers:JSON.parse(data.ordered_item.item_modifiers)}
          else
            return ordered_item
        })
        return {...state,ordered_items:new_ordered_items}
      }
      if(action_type=='checkout_order'){
        console.log(data)
        const new_orders = orders.filter((order)=>order.id != data.order.id)
        const new_ordered_items = ordered_items.filter((ordered_item)=> ordered_item.order_id != data.order.id)
        return {...state, orders:new_orders, ordered_items:new_ordered_items,currentOrder:{}}
      }
    }

    case ActionType.SET_ERROR:
      return {...state, error:action.payload, loading: false }
    default:
      return state
  }
}