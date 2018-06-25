import ActionType from './action'

const initialState = {
  loading:false,
  bootstraped:false,
  error:'',
  materials:[],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state,loading:true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, loading:false, bootstraped: true, materials:action.payload}
   
    case ActionType.CREATE_MATERIAL:
      return {...state,loading:true}
    case ActionType.CREATE_MATERIAL_SUCCESSED:
      return {...state, loading:false, materials:[...state.materials,action.payload]}
    case ActionType.SAVE_MATERIAL:
      return {...state,loading:true}
    case ActionType.SAVE_MATERIAL_SUCCESSED:{
      const new_materials = state.materials.map((material)=>{
        if(material.id == action.payload.id)
          return action.payload
        else return material
      })
      return {...state, loading:false, materials:new_materials}
    }

    case ActionType.BUY_MATERIAL:
      return {...state,loading:true}
    case ActionType.BUY_MATERIAL_SUCCESSED:{
      const new_materials = state.materials.map((material)=>{
        if(material.id == action.payload.id)
          return action.payload
        else return material
      })
      return {...state, loading:false, materials:new_materials}
    }

    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}