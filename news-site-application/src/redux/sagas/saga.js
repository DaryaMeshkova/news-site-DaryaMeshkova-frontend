import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  const json = yield fetch('http://127.0.0.1:8000/api/news/')
    .then((response) => response.json());
  yield put({ type: 'NEWS_RECEIVED', json: json.articles });
}
function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews);
}
export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}

// import React from 'react';

// import axios from 'axios';

// const api = axios.create({ baseURL: 'http://127.0.0.1:8000/api/' });

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`api:news/`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }
