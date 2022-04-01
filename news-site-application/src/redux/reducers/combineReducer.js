import { combineReducers } from 'redux';
import newsReducer from './newsPageReducer';
import numberReducer from './paginationReducer';
import tagsReducer from './tagsReducer';

export default combineReducers({
  news: newsReducer,
  number: numberReducer,
  tag: tagsReducer,
});
