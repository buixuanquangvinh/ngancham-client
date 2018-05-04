import ActionType from './action'
import { DEFAULT_USER_FORM } from './const'

const initialState = {
  loading:false,
  bootstraped:false,
  error:'',
  users:[],
  roles:[],
  form:{...DEFAULT_USER_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state,loading:true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, loading:false, bootstraped: true, users:action.payload.users, roles:action.payload.roles}
   
    case ActionType.CREATE_USER:
      return {...state,loading:true}
    case ActionType.CREATE_USER_SUCCESSED:
      return {...state, loading:false, users:[...state.users,action.payload]}
    case ActionType.SAVE_USER:
      return {...state,loading:true}
    case ActionType.SAVE_USER_SUCCESSED:{
      const new_users = state.categories.map((user)=>{
        if(user.id == action.payload.id)
          return action.payload
        else return user
      })
      return {...state, loading:false, users:new_users}
    }

    case ActionType.EDIT_USER_FORM:{
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