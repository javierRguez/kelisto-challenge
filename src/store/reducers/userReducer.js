/* eslint-disable default-param-last */
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  balance: 0,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      toast(`Welcome... ${action.userInfo.name}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      return { ...state, name: action.userInfo.name }
    case 'GET_BALANCE_SUM': {
      const balance = action.coins.reduce((prev, coin) => prev + coin.stock, 0)
      return { ...state, balance }
    }
    default:
      return state
  }
}

export default userReducer
