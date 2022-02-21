import { put, takeLatest } from 'redux-saga/effects';

import { approveLogin, declineLogin } from '../actions';
import { LOGIN_REQUESTED } from '../actionTypes';
import api from '../api';

function* loginUser(action) {
  try {
    const response = yield api.post('token/', action.payload);
    const payload = {
      id: response.data.user.id,
      email: response.data.user.email,
      name: response.data.user.username,
    };
    yield put(approveLogin(payload));
    yield localStorage.setItem('accessToken', response.data.access);
    yield localStorage.setItem('refreshToken', response.data.refresh);
  } catch (error) {
    yield put(declineLogin(error));
  }
}

function* loginUserWatcher() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
}

export default loginUserWatcher;
