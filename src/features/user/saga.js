import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import { request } from 'ulti'

function* bootstrap(action) {
  try {
    const data = yield call(request,'/users')
    yield put({ type: ActionType.BOOTSTRAP_SUCCESSED, payload: data })
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

function* updateUserRole(action) {
  try {
    const payload = yield call(request,'/update_role/',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.UPDATE_USER_ROLE_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* removeUser(action) {
  try {
    const payload = yield call(request,'/users/'+action.payload.id,{ method:'DELETE' })
    yield put({ type: ActionType.REMOVE_USER_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)
  yield takeLatest(ActionType.CREATE_USER, createUser)
  yield takeLatest(ActionType.SAVE_USER, saveUser)
  yield takeLatest(ActionType.UPDATE_USER_ROLE, updateUserRole)
  yield takeLatest(ActionType.REMOVE_USER, removeUser)
}

export default saga