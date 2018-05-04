import ActionType from './action'
import { DEFAULT_FILTER } from './const'

const initialState = {
  loading:false,
  error:'',
  archived_orders:[],
  archived_ordered_items:[],
  filter:{...DEFAULT_FILTER}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
   
    case ActionType.FETCH_DATA:
      return {...state,loading:true}
    case ActionType.FETCH_DATA_SUCCESSED:
      return {...state, loading:false, archived_orders:action.payload}

    case ActionType.EDIT_FILTER:{
      const { key, value } = action.payload
      const { filter } = state
      return {...state,filter:{...filter,[key]:value}}
    }

    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}