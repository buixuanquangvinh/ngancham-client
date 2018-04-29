import ActionType from './action'
import { DEFAULT_CATEGORY_FORM } from './const'

const initialState = {
  loading:false,
  bootstraped:false,
  error:'',
  categories:[],
  form:{...DEFAULT_CATEGORY_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state,loading:true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, loading:false, bootstraped: true, categories:action.payload}
   
    case ActionType.CREATE_CATEGORY:
      return {...state,loading:true}
    case ActionType.CREATE_CATEGORY_SUCCESSED:
      return {...state, loading:false, categories:[...state.categories,action.payload]}
    case ActionType.SAVE_CATEGORY:
      return {...state,loading:true}
    case ActionType.SAVE_CATEGORY_SUCCESSED:{
      const new_categories = state.categories.map((category)=>{
        if(category.id == action.payload.id)
          return action.payload
        else return category
      })
      return {...state, loading:false, categories:new_categories}
    }

    case ActionType.EDIT_CATEGORY_FORM:{
      const { key, value } = action.payload
      const { form } = state
      return {...state,form:{...form,[key]:value}}
    }

    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}