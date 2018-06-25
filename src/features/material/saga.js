import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import { request } from 'ulti'

function* bootstrap(action) {
  try {
    const payload = yield call(request,'/materials')
    yield put({ type: ActionType.BOOTSTRAP_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* createMaterial(action) {
  try {
    const payload = yield call(request,'/materials',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.CREATE_MATERIAL_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saveMaterial(action) {
  try {
    const payload = yield call(request,'/materials/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.SAVE_MATERIAL_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* buyMaterial(action) {
  try {
    const payload = yield call(request,'/buy_materials/',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.BUY_MATERIAL_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)
  yield takeLatest(ActionType.CREATE_MATERIAL, createMaterial)
  yield takeLatest(ActionType.SAVE_MATERIAL, saveMaterial)
  yield takeLatest(ActionType.BUY_MATERIAL, buyMaterial)
}

export default saga