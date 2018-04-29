import ActionType from './action'
import { DEFAULT_ITEM_FORM, DEFAULT_ITEM_PRICE_FORM, DEFAULT_ITEM_MODIFIER_FORM } from './const'

const initialState = {
  bootstraped:false,
  loading:false,
  error:'',
  items:[],
  item_prices:[],
  item_modifiers:[],
  item_form:{...DEFAULT_ITEM_FORM},
  item_price_form:{...DEFAULT_ITEM_PRICE_FORM},
  item_modifier_form:{...DEFAULT_ITEM_MODIFIER_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state,loading:true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, loading:false, bootstraped: true, ...action.payload}

    //item
    case ActionType.CREATE_ITEM:
      return {...state,loading:true}
    case ActionType.CREATE_ITEM_SUCCESSED:
      return {...state, loading:false, items:[...state.items,action.payload]}
    case ActionType.SAVE_ITEM:
      return {...state,loading:true}
    case ActionType.SAVE_ITEM_SUCCESSED:{
      const new_items = state.items.map((item)=>{
        if(item.id == action.payload.id){
          return action.payload
        }else return item
      })
      return {...state, loading:false, items:new_items}
    }
    case ActionType.REMOVE_ITEM:
      return {...state,loading:true}
    case ActionType.REMOVE_ITEM_SUCCESSED:
      window.location.href = "#/item"
      return {...state, loading:false, items:state.items.filter((item)=> item.id!=action.payload.id)}
    //-------------------------------------------------------------------------------------------------

    //item price
    case ActionType.CREATE_ITEM_PRICE:
      return {...state,loading:true}
    case ActionType.CREATE_ITEM_PRICE_SUCCESSED:
      return {...state, loading:false, item_prices:[...state.item_prices,action.payload]}
    case ActionType.SAVE_ITEM_PRICE:
      return {...state,loading:true}
    case ActionType.SAVE_ITEM_PRICE_SUCCESSED:{
      const new_item_prices = state.item_prices.map((price)=>{
        if(price.id == action.payload.id)
          return action.payload
        else return price
      })
      return {...state, loading:false, item_prices:new_item_prices}
    }
    case ActionType.REMOVE_ITEM_PRICE:
      return {...state,loading:true}
    case ActionType.REMOVE_ITEM_PRICE_SUCCESSED:
      return {...state, loading:false, item_prices:state.item_prices.filter((price)=> price.id!=action.payload.id)}
    //--------------------------------------------------------------------------------------------------

    //item modifier
    case ActionType.CREATE_ITEM_MODIFIER:
      return {...state,loading:true}
    case ActionType.CREATE_ITEM_MODIFIER_SUCCESSED:
      return {...state, loading:false, item_modifiers:[...state.item_modifiers,action.payload]}
    case ActionType.SAVE_ITEM_MODIFIER:
      return {...state,loading:true}
    case ActionType.SAVE_ITEM_MODIFIER_SUCCESSED:{
      const new_item_modifiers = state.item_modifiers.map((modifier)=>{
        if(modifier.id == action.payload.id)
          return action.payload
        else return modifier
      })
      return {...state, loading:false, item_modifiers:new_item_modifiers}
    }
    case ActionType.REMOVE_ITEM_MODIFIER:
      return {...state,loading:true}
    case ActionType.REMOVE_ITEM_MODIFIER_SUCCESSED:
      return {...state, loading:false, item_modifiers:state.item_modifiers.filter((modifier)=> modifier.id!=action.payload.id)}
    //---------------------------------------------------------------------------------------------------
    
    case ActionType.EDIT_ITEM_FORM:{
      const { item_form } = state
      const { key, value } = action.payload
      return {...state,item_form:{...item_form,[key]:value}} 
    }

    case ActionType.EDIT_ITEM_PRICE_FORM:{
      const { item_price_form } = state
      const { key, value } = action.payload
      return {...state,item_price_form:{...item_price_form,[key]:value}} 
    }

    case ActionType.EDIT_ITEM_MODIFIER_FORM:{
      const { item_modifier_form } = state
      const { key, value } = action.payload
      return {...state,item_modifier_form:{...item_modifier_form,[key]:value}} 
    }
    
    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}