/* eslint-disable default-param-last */
const coinReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_COINS':
      return action.coins
    default:
      return state
  }
}

export default coinReducer
