import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import request from 'request'

function* bootstrap(action) {
  try {
    const payload = yield call(request,'/rooms')
    yield put({ type: ActionType.BOOTSTRAP_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* createRoom(action) {
  try {
    const payload = yield call(request,'/rooms',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.CREATE_ROOM_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saveRoom(action) {
  try {
    const payload = yield call(request,'/categories/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.SAVE_ROOM_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)
  yield takeLatest(ActionType.CREATE_ROOM, createRoom)
  yield takeLatest(ActionType.SAVE_ROOM, saveRoom)
}

export default saga