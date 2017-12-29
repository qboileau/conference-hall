import { combineReducers } from 'redux'
import user from './user'
import event from './event'
import events from './events'

export default combineReducers({
  user,
  event,
  events,
})