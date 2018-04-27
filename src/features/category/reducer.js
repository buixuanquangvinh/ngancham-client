import ActionType from './action'
import { DEFAULT_CATEGORY_FORM } from './const'

const initialState = {
  bootstraped:false,
  error:'',
  categories:[],
  form:{...DEFAULT_CATEGORY_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, bootstraped: true, categories:action.payload}
   
    case ActionType.CREATE_CATEGORY:
      return {...state}
    case ActionType.CREATE_CATEGORY_SUCCESSED:
      return {...state, categories:[...state.categories,action.payload]}
    case ActionType.SAVE_CATEGORY:
      return {...state}
    case ActionType.SAVE_CATEGORY_SUCCESSED:{
      const new_categories = state.categories.map((category)=>{
        if(category.id == action.payload.id)
          return action.payload
        else return category
      })
      return {...state, categories:new_categories}
    }

    case ActionType.EDIT_CATEGORY_FORM:{
      const { key, value } = action.payload
      const { form } = state
      return {...state,form:{...form,[key]:value}}
    }

    case ActionType.SET_ERROR:
      return {...state,error:action.payload}
    default:
      return state
  }
}