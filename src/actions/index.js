import * as types from '../constants/ActionTypes'
import { sagaMiddleware, store } from '../store'
import handleNewMessage from '../sagas'
import setupSocket from '../sockets'
import { userServices } from '../services/auth'

let nextMessageId = 0
const nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})

export const loginActions = (username, password) => {
  const socket = setupSocket(store.dispatch, username)

  sagaMiddleware.run(handleNewMessage, { socket, username })
  userServices.login(username, password)
  return {
    type: types.LOGIN_SUCCESS,
    username
  }
}
