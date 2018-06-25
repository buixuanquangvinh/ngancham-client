import ActionType from './action'

const initialState = {
  bootstraped:false,
  loading:false,
  error:'',
  items:[],
  item_materials:[],
  item_modifiers:[]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.BOOTSTRAP:
      return {...state,loading:true}
    case ActionType.BOOTSTRAP_SUCCESSED:
      return {...state, loading:false, bootstraped: true, ...action.payload}

    //item
    case ActionType.CREATE_ITEM:
      return {...state,loading:true}
    case ActionType.CREATE_ITEM_SUCCESSED:
      return {...state, loading:false, items:[...state.items,action.payload]}
    case ActionType.SAVE_ITEM:
      return {...state,loading:true}
    case ActionType.SAVE_ITEM_SUCCESSED:{
      const new_items = state.items.map((item)=>{
        if(item.id == action.payload.id){
          return action.payload
        }else return item
      })
      return {...state, loading:false, items:new_items}
    }
    case ActionType.REMOVE_ITEM:
      return {...state,loading:true}
    case ActionType.REMOVE_ITEM_SUCCESSED:
      window.location.href = "#/item"
      return {...state, loading:false, items:state.items.filter((item)=> item.id!=action.payload.id)}
    //-------------------------------------------------------------------------------------------------

     //item material
    case ActionType.CREATE_ITEM_MATERIAL:
      return {...state,loading:true}
    case ActionType.CREATE_ITEM_MATERIAL_SUCCESSED:
      return {...state, loading:false, item_materials:[...state.item_materials,action.payload]}
    case ActionType.REMOVE_ITEM_MATERIAL:
      return {...state,loading:true}
    case ActionType.REMOVE_ITEM_MATERIAL_SUCCESSED:
      return {...state, loading:false, item_materials:state.item_materials.filter((item_material)=> item_material.id!=action.payload.id)}
    //--------------------------------------------------------------------------------------------------

    //item modifier
    case ActionType.CREATE_ITEM_MODIFIER:
      return {...state,loading:true}
    case ActionType.CREATE_ITEM_MODIFIER_SUCCESSED:
      return {...state, loading:false, item_modifiers:[...state.item_modifiers,action.payload]}
    case ActionType.SAVE_ITEM_MODIFIER:
      return {...state,loading:true}
    case ActionType.SAVE_ITEM_MODIFIER_SUCCESSED:{
      const new_item_modifiers = state.item_modifiers.map((modifier)=>{
        if(modifier.id == action.payload.id)
          return action.payload
        else return modifier
      })
      return {...state, loading:false, item_modifiers:new_item_modifiers}
    }
    case ActionType.REMOVE_ITEM_MODIFIER:
      return {...state,loading:true}
    case ActionType.REMOVE_ITEM_MODIFIER_SUCCESSED:
      return {...state, loading:false, item_modifiers:state.item_modifiers.filter((modifier)=> modifier.id!=action.payload.id)}
    //---------------------------------------------------------------------------------------------------
    
    case ActionType.SET_ERROR:
      return {...state, loading:false,error:action.payload}
    default:
      return state
  }
}