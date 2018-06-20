import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import { request } from 'ulti'

function* fetchData(action) {
  try {
    const payload = yield call(request,'/archived_orders?start_date='+action.payload.start_date+'&end_date='+action.payload.end_date)
    let new_payload = {
      archived_orders: payload.archived_orders,
      archived_ordered_items: payload.archived_ordered_items.map((archived_ordered_item)=>{
        return {...archived_ordered_item,item_modifiers:JSON.parse(JSON.parse(archived_ordered_item.item_modifiers))}
      })
    }
    yield put({ type: ActionType.FETCH_DATA_SUCCESSED, payload: new_payload })
  } catch (e) {
    yield put({ type: ActionType.SET_ERROR, payload: e.message})
  }
}

function* saga() {
  yield takeLatest(ActionType.FETCH_DATA, fetchData)
}

export default saga