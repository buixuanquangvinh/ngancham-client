import ActionType from './action'

const initialState = {
  loading:false,
  error:'',
  archived_orders:[],
  archived_ordered_items:[]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
   
    case ActionType.FETCH_DATA:
      return {...state,loading:true}
    case ActionType.FETCH_DATA_SUCCESSED:
      return {...state, loading:false, archived_orders:action.payload}

    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}