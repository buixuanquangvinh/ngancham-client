import { call, put, takeLatest, fork } from 'redux-saga/effects'

import { CategorySaga } from 'features/category'
import { ItemSaga } from 'features/item'
import { LoginSaga } from 'features/login'
import { MaterialSaga } from 'features/material'
import { OrderSaga } from 'features/order'
import { ReportSaga } from 'features/report'
import { RoomSaga } from 'features/room'
import { UserSaga } from 'features/user'

export default function* rootSaga() {
	try{
  		yield [
    		fork(CategorySaga),
    		fork(ItemSaga),
        fork(LoginSaga),
        fork(MaterialSaga),
    		fork(OrderSaga),
        fork(ReportSaga),
    		fork(RoomSaga),
        fork(UserSaga)
  		]
  	}catch(e){console.log(e)}
}