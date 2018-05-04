import { combineReducers } from 'redux'
import { CategoryReducer } from 'features/category'
import { ItemReducer } from 'features/item'
import { LoginReducer } from 'features/login'
import { OrderReducer } from 'features/order'
import { ReportReducer } from 'features/report'
import { RoomReducer } from 'features/room'
import { TableReducer } from 'features/table'
import { UserReducer } from 'features/user'

const rootReducer = combineReducers({
 category: CategoryReducer,
 item: ItemReducer,
 login: LoginReducer,
 order: OrderReducer,
 report: ReportReducer,
 room: RoomReducer,
 table: TableReducer,
 user: UserReducer
})

export default rootReducer