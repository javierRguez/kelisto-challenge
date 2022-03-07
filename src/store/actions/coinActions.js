import { toast } from 'react-toastify'
import API from 'api'

const getCoins = () => {
  return (dispatch) => {
    API.get()
      .then((res) => {
        const { data: coins } = res
        dispatch({
          type: 'GET_COINS',
          coins,
        })
        dispatch({
          type: 'GET_BALANCE_SUM',
          coins,
        })
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      })
  }
}

export default getCoins
