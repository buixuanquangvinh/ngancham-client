import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import request from 'request'

function* bootstrap(action) {
  try {
    const payload = yield call(request,'/tables')
    yield put({ type: ActionType.BOOTSTRAP_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* createTable(action) {
  try {
    const payload = yield call(request,'/tables',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.CREATE_TABLE_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saveTable(action) {
  try {
    const payload = yield call(request,'/tables/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.SAVE_TABLE_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* checkoutTable(action) {
  try {
    const payload = yield call(request,'/orders/'+action.payload.id,{ method:'DELETE', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.CHECKOUT_TABLE_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)
  yield takeLatest(ActionType.CREATE_TABLE, createTable)
  yield takeLatest(ActionType.SAVE_TABLE, saveTable)
  yield takeLatest(ActionType.CHECKOUT_TABLE, checkoutTable)
}

export default saga