import { combineReducers } from 'redux'
import coinReducer from 'store/reducers/coinReducer'

const rootReducer = combineReducers({
  coins: coinReducer,
})

export default rootReducer
