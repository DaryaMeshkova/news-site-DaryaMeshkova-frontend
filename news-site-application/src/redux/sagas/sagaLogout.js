import { put, takeLatest } from 'redux-saga/effects';
import { approveLogout, declineLogout } from '../actions';
import { LOGOUT_REQUESTED } from '../actionTypes';

function* logoutUser() {
  try {
    yield localStorage.removeItem('accessToken');
    yield put(approveLogout());
  } catch (error) {
    yield put(declineLogout(error));
  }
}
function* logoutUserWatcher() {
  yield takeLatest(LOGOUT_REQUESTED, logoutUser);
}
export default logoutUserWatcher;
