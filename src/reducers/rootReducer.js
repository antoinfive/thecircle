import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  messages: messagesReducer,
  users: usersReducer
})

export default rootReducer
