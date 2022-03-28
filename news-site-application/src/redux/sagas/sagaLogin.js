import { put, takeLatest } from 'redux-saga/effects';

import { loginApproved, loginDeclined } from '../actionsCreator';
import { LOGIN_APPROVED, LOGIN_REQUESTED } from '../actionTypes';
import api from '../api';

function* loginUser({payload:{password, email}}) {
  console.log(email)
  try {
    const response = yield api.post('token/', {password, email});
    yield put({typr:LOGIN_APPROVED, payload:{password, email}});
    yield localStorage.setItem('access', response.data.access);
    yield localStorage.setItem('refresh', response.data.refresh);
  } catch (error) {
    yield put(loginDeclined(error));
  }
}

function* loginUserWatcher() {
  yield takeLatest(LOGIN_REQUESTED, loginUser);
}

export default loginUserWatcher;
