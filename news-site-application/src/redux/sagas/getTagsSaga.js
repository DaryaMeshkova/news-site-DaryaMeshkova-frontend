import { put, takeLatest } from 'redux-saga/effects';

import { TAGS_REQUESTED, TAGS_RECEIVED, TAGS_REJECTED } from '../actionTypes';
import api from '../api';

function* getTags() {
  try {

    // const config = {
    //   headers: "{ 'Authorization': `Bearer ${localStorage.access}` }"
    // }
    const json = yield api.get(`tags/`,  )
      .then((response) => response.data);
    yield put({ type: TAGS_RECEIVED, payload: json.results });

  } catch (error) {
    yield put({ type: TAGS_REJECTED, error });
  }
}
export function* getTagsWatcher() {
  yield takeLatest(TAGS_REQUESTED, getTags);
}