import createSagaMiddleware from 'redux-saga';
import { connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './sagas/saga';
import rootReducer from './reducers/reducer';
import App from './components/MainPage';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
export const ConnectedApp = connect((state) => state)(App);
