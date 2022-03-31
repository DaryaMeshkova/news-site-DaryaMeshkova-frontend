import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import { SING_UP, SING_UP_ERROR, SING_UP_APPROVED } from '../actionTypes';
import api from '../api';

function* signUpUser({ payload: { password, email, username } }) {
  try {
  //   let config = {
  //     headers: { 'Authorization': `Bearer ${localStorage.access}` }
  //   };
    const response = yield api.post('users/', {password, email, username})
    .then((response) => response.data);
    yield put({ type: SING_UP_APPROVED, payload: response });
    // yield localStorage.setItem('accessToken', response.data.access);
    // yield localStorage.setItem('refreshToken', response.data.refresh);
  } catch (error) {
    yield put({type:SING_UP_ERROR, error});
  }
}

export function* signUpUserWatcher() {
  yield takeEvery(SING_UP, signUpUser);
}

