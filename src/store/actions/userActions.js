const loadUser = () => {
  return (dispatch) => {
    const HARDCODE_USER = { name: 'Anakin' }
    dispatch({
      type: 'USER_LOADED',
      userInfo: HARDCODE_USER,
    })
  }
}

export default loadUser
