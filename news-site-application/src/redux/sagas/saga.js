import { put, takeLatest, all } from 'redux-saga/effects';

import { NEWS_REQUESTED, NEWS_RECEIVED } from '../actionsType/action_1';
import api from '../api/api';

function* axiosNews() {
  const json = yield api.get('news/')
    .then((response) => response.data);
  yield put({ type: NEWS_RECEIVED, payload: json });
}
function* actionWatcher() {
  yield takeLatest(NEWS_REQUESTED, axiosNews);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
