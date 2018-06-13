import {combineReducers} from 'redux'
import messages from './messages'
import users from './users'
import authentication from './authentication'

const chat = combineReducers({
  messages,
    users,
    authentication
});

export default chat
