import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8000/api/' });

function* fetchNews() {
  const json = yield api.get('news/')
    .then((response) => response.data);
  yield put({ type: 'NEWS_RECEIVED', payload: json });
}
function* actionWatcher() {
  yield takeLatest('NEWS_REQUESTED', fetchNews);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
