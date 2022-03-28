import { all } from 'redux-saga/effects'
import { signUpUserWatcher } from './sagaSignUp'
import { fetchNewsWatcher } from './saga'
import loginUserWatcher from './sagaLogin'

export default function* rootSaga() {
  yield all([
    signUpUserWatcher(),
    fetchNewsWatcher(),
    loginUserWatcher(),
  ])
}
