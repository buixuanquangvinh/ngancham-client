import ActionType from './action'
import { DEFAULT_ROOM_FORM } from './const'

const initialState = {
  bootstraped:false,
  error:'',
  rooms:[],
  currentRoom:{},
  form:{...DEFAULT_ROOM_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, bootstraped: true, rooms:action.payload}
    
    case ActionType.CREATE_ROOM:
      return {...state}
    case ActionType.CREATE_ROOM_SUCCESSED:
      return {...state, rooms:[...state.rooms,action.payload]}
    case ActionType.SAVE_ROOM:
      return {...state}
    case ActionType.SAVE_ROOM_SUCCESSED:{
      const new_rooms = state.rooms.map((room)=>{
        if(room.id == action.payload.id)
          return action.payload
        else return ROOM
      })
      return {...state, rooms:new_rooms}
    }

    case ActionType.EDIT_ROOM_FORM:{
      const { key, value } = action.payload
      const { form } = state
      return {...state,form:{...form,[key]:value}}
    }

    case ActionType.SELECT_ROOM:{
      return {...state,currentRoom:action.payload}
    }

    case ActionType.SET_ERROR:
      return {...state,error:action.payload}
    default:
      return state
  }
}