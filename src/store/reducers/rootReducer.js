import { combineReducers } from 'redux'
import coinReducer from './coinReducer'

const rootReducer = combineReducers({
  coins: coinReducer,
})

export default rootReducer
