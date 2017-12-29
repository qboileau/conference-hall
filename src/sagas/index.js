import { all } from 'redux-saga/effects'

import firebaseSaga from './firebase'
import authSaga from './auth'
import eventSaga from './event'
import eventsSaga from './events'
import toasterSaga from './toaster'
import userSaga from './user'
import talkSaga from './talk'

export default function* sagas() {
  try {
    yield all([
      firebaseSaga(),
      authSaga(),
      eventSaga(),
      eventsSaga(),
      toasterSaga(),
      userSaga(),
      talkSaga(),
    ])
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('saga exception', error)
  }
}