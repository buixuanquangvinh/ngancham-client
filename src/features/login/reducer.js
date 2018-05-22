import ActionType from './action'

const initialState = {
  loading: false,
  error:''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
   
    case ActionType.LOGIN:
      return {...state,loading:true}
    case ActionType.LOGIN_SUCCESSED:
      localStorage.token = action.payload.token
      localStorage.user = JSON.stringify(action.payload.user)
      location.reload() 
      return {...state,loading:false}

    case ActionType.LOGOUT:
      localStorage.clear()
      location.reload() 
      return {...state}

    case ActionType.SET_ERROR:
      return {...state,error:action.payload,loading:false}
    default:
      return state
  }
}