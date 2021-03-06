import * as types from '../constants/ActionTypes'


const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? { loggedIn: true, user } : {}

function authentication(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      }
    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    default:
      return state
  }
}

export default authentication
