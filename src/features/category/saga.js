import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import { request } from 'ulti'

function* bootstrap(action) {
  try {
    const payload = yield call(request,'/categories')
    yield put({ type: ActionType.BOOTSTRAP_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* createCategory(action) {
  try {
    const payload = yield call(request,'/categories',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.CREATE_CATEGORY_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saveCategory(action) {
  try {
    const payload = yield call(request,'/categories/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type: ActionType.SAVE_CATEGORY_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)
  yield takeLatest(ActionType.CREATE_CATEGORY, createCategory)
  yield takeLatest(ActionType.SAVE_CATEGORY, saveCategory)
}

export default saga