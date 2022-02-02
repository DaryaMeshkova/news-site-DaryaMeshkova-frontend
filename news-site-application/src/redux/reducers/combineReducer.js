import { combineReducers } from 'redux';
import newsReducer from './newsPageReducer';

export default combineReducers({
  news: newsReducer,
});
