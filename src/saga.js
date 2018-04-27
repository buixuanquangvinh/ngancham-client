import { call, put, takeLatest, fork } from 'redux-saga/effects'

import { CategorySaga } from 'features/category'
import { ItemSaga } from 'features/item'
import { LoginSaga } from 'features/login'
import { OrderSaga } from 'features/order'
import { RoomSaga } from 'features/room'
import { TableSaga } from 'features/table'

export default function* rootSaga() {
	try{
  		yield [
    		fork(CategorySaga),
    		fork(ItemSaga),
        fork(LoginSaga),
    		fork(OrderSaga),
    		fork(RoomSaga),
    		fork(TableSaga)
  		]
  	}catch(e){console.log(e)}
}