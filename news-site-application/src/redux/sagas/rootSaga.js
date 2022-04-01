import { all } from 'redux-saga/effects'
import { signUpUserWatcher } from './sagaSignUp'
import { fetchNewsWatcher } from './saga'
import loginUserWatcher from './sagaLogin'
import { saveChangeWatcher } from './sagaEdit'
import { addNewsWatcher } from './addNewsSaga'
import { getNumberWatcher } from './sagaPagination'
import { getTagsWatcher } from './getTagsSaga'



export default function* rootSaga() {
  yield all([
    signUpUserWatcher(),
    fetchNewsWatcher(),
    loginUserWatcher(),
    saveChangeWatcher(),
    getNumberWatcher(),
    addNewsWatcher(),
    getTagsWatcher()
  ])
}
