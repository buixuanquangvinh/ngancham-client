import ActionType from './action'

const initialState = {
  loading:false,
  bootstraped:false,
  error:'',
  users:[],
  user_roles:[],
  roles:[]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state,loading:true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, loading:false, bootstraped: true, ...action.payload}
   
    case ActionType.CREATE_USER:
      return {...state,loading:true}
    case ActionType.CREATE_USER_SUCCESSED:
      return {...state, loading:false, users:[...state.users,action.payload]}
    case ActionType.SAVE_USER:
      return {...state,loading:true}
    case ActionType.SAVE_USER_SUCCESSED:{
      const new_users = state.users.map((user)=>{
        if(user.id == action.payload.id)
          return action.payload
        else return user
      })
      return {...state, loading:false, users:new_users}
    }
    case ActionType.REMOVE_USER:
      return {...state,loading:true}
    case ActionType.REMOVE_USER_SUCCESSED:{
      const new_users = state.users.filter((user)=> user.id!=action.payload.id)
      return {...state, loading:false, users:new_users}
    }
    case ActionType.UPDATE_USER_ROLE:
      return {...state,loading:true}
    case ActionType.UPDATE_USER_ROLE_SUCCESSED:{
      const new_user_roles = state.user_roles.filter((user_role)=> user_role.user_id != action.payload.user_id).concat(action.payload.user_roles)
      return {...state, loading:false, user_roles:new_user_roles}
    }

    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}