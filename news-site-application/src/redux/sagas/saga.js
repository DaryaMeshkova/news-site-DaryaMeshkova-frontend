import { put, takeLatest, all } from 'redux-saga/effects';

import { NEWS_REQUESTED, NEWS_RECEIVED, NEWS_REJECTED } from '../actionTypes';
import api from '../api';

function* fetchNews() {
  try {
    const json = yield api.get('news/')
      .then((response) => response.data);
    yield put({ type: NEWS_RECEIVED, payload: json });
  } catch (error) {
    yield put({ type: NEWS_REJECTED, error });
  }
}
function* fetchNewsWatcher() {
  yield takeLatest(NEWS_REQUESTED, fetchNews);
}
export default function* rootSaga() {
  yield all([
    fetchNewsWatcher(),
  ]);
}
