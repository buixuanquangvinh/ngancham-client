import { ipcRenderer } from 'electron'
import ActionType from './action'
import { DEFAULT_TABLE_FORM } from './const'

const initialState = {
  loading:false,
  bootstraped:false,
  error:'',
  tables:[],
  currentTable:{},
  form:{...DEFAULT_TABLE_FORM}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state, loading:true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, loading:false, bootstraped: true, tables:action.payload}
   
    case ActionType.CREATE_TABLE:
      return {...state, loading:true}
    case ActionType.CREATE_TABLE_SUCCESSED:
      return {...state, loading:false, tables:[...state.tables,action.payload]}
    case ActionType.SAVE_TABLE:
      return {...state, loading:true}
    case ActionType.SAVE_TABLE_SUCCESSED:{
      const new_tables = state.tables.map((table)=>{
        if(table.id == action.payload.id)
          return action.payload
        else return table
      })
      return {...state, loading:false, tables:new_tables}
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
      return {...state, loading:true}
    case ActionType.CHECKOUT_TABLE_SUCCESSED:{
      ipcRenderer.send('print',action.payload)
      return {...state, loading:false}
    }

    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}