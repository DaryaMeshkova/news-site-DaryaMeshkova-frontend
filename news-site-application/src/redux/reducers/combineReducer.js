import { combineReducers } from 'redux';
import newsReducer from './newsPageReducer';
import userReducer from './authReducer';

export default combineReducers({
  news: newsReducer,
  users: userReducer,
});
