import { put, takeLatest } from 'redux-saga/effects';

import { ADD_NEWS_RECEIVED, ADD_NEWS_REJECTED, ADD_NEWS_REQUESTED } from '../actionTypes';
import api from '../api';

function* addNewsSaga({payload:{title, author, newText, tag}}) {
  try {

    // const config = {
    //   'Content-Type': "form-data"
    // }
    const response = yield api.post(`news/`, {title, author, text:newText, tags:[tag]})
      .then((response) => response.data);
    yield put({ type: ADD_NEWS_RECEIVED, payload: response });
  } catch (error) {
    yield put({ type: ADD_NEWS_REJECTED, error });
  }
}
export function* addNewsWatcher() {
  yield takeLatest(ADD_NEWS_REQUESTED, addNewsSaga);
}
