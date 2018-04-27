import { combineReducers } from 'redux'
import { CategoryReducer } from 'features/category'
import { ItemReducer } from 'features/item'
import { LoginReducer } from 'features/login'
import { OrderReducer } from 'features/order'
import { RoomReducer } from 'features/room'
import { TableReducer } from 'features/table'

const rootReducer = combineReducers({
 category: CategoryReducer,
 item: ItemReducer,
 login: LoginReducer,
 order: OrderReducer,
 room: RoomReducer,
 table: TableReducer
})

export default rootReducer