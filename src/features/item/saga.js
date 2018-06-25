import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import { request } from 'ulti'

function* bootstrap(action) {
  try {
    const items = yield call(request,'/items')
    yield put({ type:ActionType.BOOTSTRAP_SUCCESSED, payload:items })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

//item
function* createItem(action) {
  try {
    const payload = yield call(request,'/items/',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.CREATE_ITEM_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* saveItem(action) {
  try {
    const payload = yield call(request,'/items/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.SAVE_ITEM_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* removeItem(action) {
  try {
    const payload = yield call(request,'/items/'+action.payload.id,{ method:'DELETE' })
    yield put({ type:ActionType.REMOVE_ITEM_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}
//----------------------------------------------------------------------------------------------------------------------------

//item modifier

function* createItemModifier(action) {
  try {
    const payload = yield call(request,'/item_modifiers/',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.CREATE_ITEM_MODIFIER_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* saveItemModifier(action) {
  try {
    const payload = yield call(request,'/item_modifiers/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.SAVE_ITEM_MODIFIER_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* removeItemModifier(action) {
  try {
    const payload = yield call(request,'/item_modifiers/'+action.payload.id,{ method:'DELETE' })
    yield put({ type:ActionType.REMOVE_ITEM_MODIFIER_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}
//-----------------------------------------------------------------------------------------------------------------------------

//item material

function* createItemMaterial(action) {
  try {
    const payload = yield call(request,'/add_item_material/',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.CREATE_ITEM_MATERIAL_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* removeItemMaterial(action) {
  try {
    const payload = yield call(request,'/remove_item_material/'+action.payload.id,{ method:'DELETE' })
    yield put({ type:ActionType.REMOVE_ITEM_MATERIAL_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}
//-----------------------------------------------------------------------------------------------------------------------------

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)

  yield takeLatest(ActionType.CREATE_ITEM, createItem)
  yield takeLatest(ActionType.SAVE_ITEM, saveItem)
  yield takeLatest(ActionType.REMOVE_ITEM, removeItem)

  yield takeLatest(ActionType.CREATE_ITEM_MATERIAL, createItemMaterial)
  yield takeLatest(ActionType.REMOVE_ITEM_MATERIAL, removeItemMaterial)

  yield takeLatest(ActionType.CREATE_ITEM_MODIFIER, createItemModifier)
  yield takeLatest(ActionType.SAVE_ITEM_MODIFIER, saveItemModifier)
  yield takeLatest(ActionType.REMOVE_ITEM_MODIFIER, removeItemModifier)
}

export default saga