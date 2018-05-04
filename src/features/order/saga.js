import { call, put, takeLatest } from 'redux-saga/effects'
import ActionType from './action'
import request from 'request'

function* bootstrap(action) {
  try {
    const orders = yield call(request,'/orders')
    const ordered_items = yield call(request,'/ordered_items')
    let new_ordered_items = ordered_items.map((ordered_item)=>{
      return {...ordered_item,item_modifiers:JSON.parse(ordered_item.item_modifiers)}
    })
    yield put({ type:ActionType.BOOTSTRAP_SUCCESSED, payload:{ orders:orders, ordered_items:new_ordered_items } })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* synchronize(action) {
  try {
    const orders = yield call(request,'/orders')
    const ordered_items = yield call(request,'/ordered_items')
    let new_ordered_items = ordered_items.map((ordered_item)=>{
      return {...ordered_item,item_modifiers:JSON.parse(ordered_item.item_modifiers)}
    })
    yield put({ type:ActionType.BOOTSTRAP_SUCCESSED, payload:{ orders:orders, ordered_items:new_ordered_items } })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* createOrder(action) {
  try {
    const payload = yield call(request,'/orders',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.CREATE_ORDER_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* saveOrder(action) {
  try {
    const payload = yield call(request,'/orders/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.SAVE_ORDER_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* createOrderedItem(action) {
  try {
    const payload = yield call(request,'/ordered_items',{ method:'POST', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.CREATE_ORDERED_ITEM_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* saveOrderedItem(action) {
  try {
    const payload = yield call(request,'/ordered_items/'+action.payload.id,{ method:'PUT', body:JSON.stringify(action.payload) })
    yield put({ type:ActionType.SAVE_ORDERED_ITEM_SUCCESSED, payload:payload })
  } catch (e) {
    yield put({ type:ActionType.SET_ERROR, payload:e.message })
  }
}

function* saga() {
  yield takeLatest(ActionType.BOOTSTRAP, bootstrap)
  yield takeLatest(ActionType.SYNCHRONIZE, synchronize)
  yield takeLatest(ActionType.CREATE_ORDER, createOrder)
  yield takeLatest(ActionType.SAVE_ORDER, saveOrder)
  yield takeLatest(ActionType.CREATE_ORDERED_ITEM, createOrderedItem)
  yield takeLatest(ActionType.SAVE_ORDERED_ITEM, saveOrderedItem)
}

export default saga