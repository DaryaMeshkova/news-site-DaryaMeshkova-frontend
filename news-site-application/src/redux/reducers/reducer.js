import { NEWS_REQUESTED, NEWS_RECEIVED } from '../actionsType/action_1';

const initialState = {
  news: [],
  loading: false,
  error: null,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEWS_REQUESTED:
      return { ...state, loading: true };
    case NEWS_RECEIVED:
      return { ...state, news: action.payload, loading: false };
    default:
      return state;
  }
};
export default reducer;
