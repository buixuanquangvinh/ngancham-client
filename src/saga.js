import { call, put, takeLatest, fork } from 'redux-saga/effects'

import { CategorySaga } from 'features/category'
import { ItemSaga } from 'features/item'
import { LoginSaga } from 'features/login'
import { OrderSaga } from 'features/order'
import { ReportSaga } from 'features/report'
import { RoomSaga } from 'features/room'
import { TableSaga } from 'features/table'
import { UserSaga } from 'features/user'

export default function* rootSaga() {
	try{
  		yield [
    		fork(CategorySaga),
    		fork(ItemSaga),
        fork(LoginSaga),
    		fork(OrderSaga),
        fork(ReportSaga),
    		fork(RoomSaga),
    		fork(TableSaga),
        fork(UserSaga)
  		]
  	}catch(e){console.log(e)}
}