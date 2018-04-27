import ActionType from './action'
import { DEFAULT_LOGIN_FORM } from './const'

const initialState = {
  loading: false,
  error:'',
  form:{...DEFAULT_LOGIN_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
   
    case ActionType.LOGIN:
      return {...state,loading:true}
    case ActionType.LOGIN_SUCCESSED:
      localStorage.token = action.payload
      window.location.href = '#/'
      return {...state,loading:false}

    case ActionType.EDIT_LOGIN_FORM:{
      const { key, value } = action.payload
      const { form } = state
      return {...state,form:{...form,[key]:value}}
    }

    case ActionType.SET_ERROR:
      return {...state,error:action.payload,loading:false}
    default:
      return state
  }
}