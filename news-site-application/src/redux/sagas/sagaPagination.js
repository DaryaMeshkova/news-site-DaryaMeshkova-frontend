import { put, takeLatest } from 'redux-saga/effects';

import { NUMBER_REQUESTED, NUMBER_RECEIVED, NUMBER_REJECTED } from '../actionTypes';
import api from '../api';
console.log('123')
function* getNumber({page}) {
  try {
    const json = yield api.get(`news/?page=${page}`)
      .then((response) => response.data);
    yield put({ type: NUMBER_RECEIVED, payload: json.count });
   console.log(response.data)
  } catch (error) {
    yield put({ type: NUMBER_REJECTED, error });
  }
}
export function* fetchNewsWatcher() {
  yield takeLatest(NUMBER_REQUESTED, getNumber);}
