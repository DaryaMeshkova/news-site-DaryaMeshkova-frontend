import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas/saga';
import reducer from './reducers/reducer';
import MainPage from './components/MainPage';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export const ConnectedApp = connect((state) => state)(MainPage);
