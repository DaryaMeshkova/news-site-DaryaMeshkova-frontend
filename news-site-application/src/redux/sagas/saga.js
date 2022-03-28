import { put, takeLatest } from 'redux-saga/effects';

import { NEWS_REQUESTED, NEWS_RECEIVED, NEWS_REJECTED } from '../actionTypes';
import api from '../api';

function* fetchNews() {
  try {
    const json = yield api.get('news/?page=1')
      .then((response) => response.data);
    yield put({ type: NEWS_RECEIVED, payload: json.results });
  } catch (error) {
    yield put({ type: NEWS_REJECTED, error });
  }
}
export function* fetchNewsWatcher() {
  yield takeLatest(NEWS_REQUESTED, fetchNews);
}
