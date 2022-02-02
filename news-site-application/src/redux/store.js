import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import MainPage from '../pages/MainPage/MainPage';

import rootSaga from './sagas/saga';
import combineReducers from './reducers/combineReducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export const ConnectedApp = connect((state) => state)(MainPage);
