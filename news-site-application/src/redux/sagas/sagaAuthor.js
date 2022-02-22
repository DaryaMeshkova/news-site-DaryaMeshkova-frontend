import { put, takeLatest } from 'redux-saga/effects';
import { approveLogin, declineLogin, requestTokenRefresh } from '../actions';
import { AUTHENTICATION_REQUESTED } from '../actionTypes';
import api from '../api';
import { UNAUTHORIZED_FETCH_NEWS, UNAUTHORIZED_STATUS_CODE, INTERNAL_SERVER_ERROR_STATUS_CODE } from '../../constants';

function* authenticateUser() {
  try {
    const response = yield api.post('user_info/');
    const payload = {
      id: response.data.id,
      email: response.data.email,
      name: response.data.username,
    };
    yield put(approveLogin(payload));
  } catch (error) {
    if (error.response.status === UNAUTHORIZED_STATUS_CODE
      || error.response.status === INTERNAL_SERVER_ERROR_STATUS_CODE) {
      yield put(requestTokenRefresh({ failedSaga: UNAUTHORIZED_FETCH_NEWS }));
    }
    yield put(declineLogin(error));
  }
}
function* authenticateUserWatcher() {
  yield takeLatest(AUTHENTICATION_REQUESTED, authenticateUser);
}
export default authenticateUserWatcher;
