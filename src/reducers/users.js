import * as types from '../constants/ActionTypes'

const users = (state = [], action) => {
  switch (action.type) {
    case types.USERS_LIST:
      const uniqueNames = action.users.filter((val, id, array) => {
        console.log(arguments)
        return val
      })

      return action.users
    default:
      return state
  }
}

export default users
