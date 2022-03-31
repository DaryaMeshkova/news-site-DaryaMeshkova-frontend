import { put, takeLatest } from 'redux-saga/effects';

import { ADD_NEWS_RECEIVED, ADD_NEWS_REJECTED, ADD_NEWS_REQUESTED } from '../actionTypes';
import api from '../api';

function* addNewsSaga({payload:{title, author, text}}) {
  try {
    const response = yield api.post(`news/`, {title, author, text})
      .then((response) => response.data);
    yield put({ type: ADD_NEWS_RECEIVED, payload: response });
    // console.log(json.count)
  } catch (error) {
    yield put({ type: ADD_NEWS_REJECTED, error });
  }
}
export function* addNewsWatcher() {
  yield takeLatest(ADD_NEWS_REQUESTED, addNewsSaga);
}
