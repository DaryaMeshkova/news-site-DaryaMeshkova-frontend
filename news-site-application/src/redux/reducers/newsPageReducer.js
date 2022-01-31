import { NEWS_REQUESTED, NEWS_RECEIVED, NEWS_REJECTED } from '../actionTypes';

const initialState = {
  news: [],
  loading: false,
  error: null,
};
const newsPageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEWS_REQUESTED:
      return { ...state, loading: true, error: null };
    case NEWS_RECEIVED:
      return {
        ...state, news: action.payload, loading: false, error: null,
      };
    case NEWS_REJECTED:
      return {
        ...state, loading: false, news: [], error: action.error,
      };
    default:
      return state;
  }
};
export default newsPageReducer;
