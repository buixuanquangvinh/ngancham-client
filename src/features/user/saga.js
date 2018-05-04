import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import request from 'request'

function* bootstrap(action) {
  try {
    const users = yield call(request,'/users')
    const roles = yield call(request,'/roles')
    yield put({ type: ActionType.BOOTSTRAP_SUCCESSED, payload: { users:users, roles:roles } })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* createUser(action) {
  try {
    const payload = yield call(request,'/users',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.CREATE_USER_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saveUser(action) {
  try {
    const payload = yield call(request,'/users/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.SAVE_USER_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)
  yield takeLatest(ActionType.CREATE_USER, createUser)
  yield takeLatest(ActionType.SAVE_USER, saveUser)
}

export default saga