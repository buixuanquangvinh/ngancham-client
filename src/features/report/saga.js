import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import request from 'request'

function* fetchData(action) {
  try {
    const payload = yield call(request,'/archived_orders?start_date='+action.payload.start_date+'&end_date='+action.payload.end_date)
    yield put({ type: ActionType.FETCH_DATA_SUCCESSED, payload: payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.FETCH_DATA, fetchData)
}

export default saga