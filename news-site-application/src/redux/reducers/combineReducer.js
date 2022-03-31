import { combineReducers } from 'redux';
import newsReducer from './newsPageReducer';
import numberReducer from './paginationReducer';

export default combineReducers({
  news: newsReducer,
  number: numberReducer,
});
