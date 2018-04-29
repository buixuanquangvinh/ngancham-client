import { ipcRenderer } from 'electron'
import ActionType from './action'
import uniqueId from 'lodash/uniqueId'

const initialState = {
  bootstraped:false,
  loading: false,
  error:'',
  
  orders: [],
  ordered_items: [],

  form:{
    order_number:'',
    order_items: []
  }
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
      return {...state, loading: false}

    case ActionType.SAVE_ORDER:
      return {...state, loading: true}
    case ActionType.SAVE_ORDER_SUCCESSED:
      return {...state, loading: false}

    case ActionType.EDIT_ORDER_FORM:{
      const { form } = state
      const { key, value } = action.payload
      return {...state,form:{...form,[key]:value}} 
    }

    case ActionType.ADD_ORDER_ITEM:{
      const { form } = state
      let order_item = {
        ...action.payload,
        temp_id:uniqueId('order_item'),
        number_of_item:1,
        item_modifiers:[],
        status:'pending'
      }
      return {...state, form:{...form,order_items:[...form.order_items,order_item]} }
    }

    case ActionType.EDIT_ORDER_ITEM:{
      const { temp_id, key, value } = action.payload
      const { order_items } = state.form
      let new_order_items = order_items.map((order_item)=>{
        if(order_item.temp_id==temp_id)
          return {...order_item,[key]:value}
        else return order_item
      })
      return {...state, form:{...state.form,order_items:new_order_items}}
    }

    case ActionType.REMOVE_ORDER_ITEM:{
      const { form } = state
      return {...state, form:{...form,order_items: form.order_items.filter((order_item)=>order_item.temp_id!=action.payload.temp_id)} }
    }

    case ActionType.CLEAR_ORDER_ITEM:{
      const { form } = state
      return {...state, form:{...form,order_items:[]} }
    }

    case ActionType.SAVE_ORDERED_ITEM:
      return {...state, loading: true}
    case ActionType.SAVE_ORDERED_ITEM_SUCCESSED:
      return {...state, loading: false}

    case ActionType.SOCKET_UPDATE:{
      const { orders, ordered_items } = state
      const { action_type, data } = action.payload
      if(action_type=='create_order'){
		ipcRenderer.send('print',action.payload)
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
		ipcRenderer.send('print',action.payload)
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
      if(action_type=='checkout_table'){
        const new_orders = orders.filter((order)=>order.table_id != data.table.id)
        const new_order_ids = new_orders.map((order)=>order.id)
        const new_ordered_items = ordered_items.filter((ordered_item)=>new_order_ids.indexOf(ordered_item.order_id) >=0)
        return {...state, orders:new_orders, ordered_items:new_ordered_items}
      }
    }

    case ActionType.SET_ERROR:
      return {...state, error:action.payload, loading: false }
    default:
      return state
  }
}