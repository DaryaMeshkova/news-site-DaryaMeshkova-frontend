import { put, takeLatest } from 'redux-saga/effects';

import { NUMBER_REQUESTED, NUMBER_RECEIVED, NUMBER_REJECTED } from '../actionTypes';
import api from '../api';

function* getNumber() {
  // const config = {
  //   headers: "{ 'Authorization': `Bearer ${localStorage.access}` }"
  // }
  try {
    const response = yield api.get(`news/`,  )
      .then((response) => response.data);
    yield put({ type: NUMBER_RECEIVED, payload: response.count});
 
  } catch (error) {
    yield put({ type: NUMBER_REJECTED, error });
  }
}
export function* getNumberWatcher() {
  yield takeLatest(NUMBER_REQUESTED, getNumber);}
