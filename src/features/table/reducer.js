import { ipcRenderer } from 'electron'
import ActionType from './action'
import { DEFAULT_TABLE_FORM } from './const'

const initialState = {
  bootstraped:false,
  error:'',
  tables:[],
  currentTable:{},
  form:{...DEFAULT_TABLE_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, bootstraped: true, tables:action.payload}
   
    case ActionType.CREATE_TABLE:
      return {...state}
    case ActionType.CREATE_TABLE_SUCCESSED:
      return {...state, tables:[...state.tables,action.payload]}
    case ActionType.SAVE_TABLE:
      return {...state}
    case ActionType.SAVE_TABLE_SUCCESSED:{
      const new_tables = state.tables.map((table)=>{
        if(table.id == action.payload.id)
          return action.payload
        else return table
      })
      return {...state, tables:new_tables}
    }

    case ActionType.EDIT_TABLE_FORM:{
      const { key, value } = action.payload
      const { form } = state
      return {...state,form:{...form,[key]:value}}
    }

    case ActionType.SELECT_TABLE:{
      return {...state,currentTable:action.payload}
    }

    case ActionType.CHECKOUT_TABLE:
      return {...state}
    case ActionType.CHECKOUT_TABLE_SUCCESSED:{
      ipcRenderer.send('print',action.payload)
      return {...state}
    }

    case ActionType.SET_ERROR:
      return {...state,error:action.payload}
    default:
      return state
  }
}