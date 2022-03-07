import { combineReducers } from 'redux'
import coinReducer from 'store/reducers/coinReducer'
import userReducer from 'store/reducers/userReducer'

const rootReducer = combineReducers({
  coins: coinReducer,
  userInfo: userReducer,
})

export default rootReducer
