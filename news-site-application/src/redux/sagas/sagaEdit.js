import { put, takeEvery, takeLatest, select } from 'redux-saga/effects';

import { NEW_TEXT, SAVE_CHANGE, SAVE_CHANGE_ERROR, SAVE_CHANGE_SUCCESSESFUL } from '../actionTypes';
import api from '../api';


function* saveChange({payload:{text, id}}) {
//  console.log(id)
  try {
    const response = yield api.patch(`news/${id.id}/`, {text})
      .then((response) => response.data);
    yield put({ type: NEW_TEXT, payload: response });
  //  console.log(response)
  } catch (error) {
    yield put({ type: SAVE_CHANGE_ERROR, error });
  }
}

export function* saveChangeWatcher() {
  yield takeEvery(SAVE_CHANGE, saveChange);
}
