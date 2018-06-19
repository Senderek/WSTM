import * as types from '../constants/ActionTypes'
import { sagaMiddleware, store } from '../store'
import handleNewMessage from '../sagas'
import setupSocket from '../sockets'
import { userServices } from '../services/auth'

let nextMessageId = 0
const nextUserId = 0

/**
 * Action that reflectes adding a message.
 * @param {string} message Message payload.
 * @param {string} author Author username.
 * @return {object}
 */
export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})
/**
 * Action for handling receiving a message.
 * @param {string} message Message payload.
 * @param {string} author Author username.
 * @return {object}
 */
export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})
/**
 * Action that handles changing current user list.
 * @param {array} users Payload of users list.
 * @return {object}
 */
export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})
/**
 * Handles logging in new user.
 * @param {string} username User desired username.
 * @param {string} password User password.
 * @return {object}
 */
export const loginActions = (username, password) => {
  const socket = setupSocket(store.dispatch, username)

  sagaMiddleware.run(handleNewMessage, { socket, username })
  userServices.login(username, password)
  return {
    type: types.LOGIN_SUCCESS,
    username
  }
}
