import { combineReducers } from 'redux'
import { CategoryReducer } from 'features/category'
import { ItemReducer } from 'features/item'
import { LoginReducer } from 'features/login'
import { MaterialReducer } from 'features/material'
import { OrderReducer } from 'features/order'
import { ReportReducer } from 'features/report'
import { RoomReducer } from 'features/room'
import { UserReducer } from 'features/user'

const rootReducer = combineReducers({
 category: CategoryReducer,
 item: ItemReducer,
 login: LoginReducer,
 material: MaterialReducer,
 order: OrderReducer,
 report: ReportReducer,
 room: RoomReducer,
 user: UserReducer
})

export default rootReducer