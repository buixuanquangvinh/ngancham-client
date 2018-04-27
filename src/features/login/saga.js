import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import request from 'request'

function* login(action) {
  try {
    const payload = yield call(request,'/authenticate',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.LOGIN_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload:e.message })
  }
}

function* saga() {
  yield takeLatest(ActionType.LOGIN, login)
 
}

export default saga