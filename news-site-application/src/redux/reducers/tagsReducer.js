import { TAGS_REQUESTED, TAGS_RECEIVED, TAGS_REJECTED } from '../actionTypes';


const initialState = {
  tags: ""
};

const tagsReducer = (state = initialState, action = {}) => {


  switch (action.type) {
    case TAGS_REQUESTED:
      return { ...state, loading: true, error: null };
    case TAGS_RECEIVED:
      return {
        ...state, tags: action.payload, loading: false, error: null,
      };
    case TAGS_REJECTED:
      return {
        ...state, tags: action.payload, loading: false, error: action.error,
      }
    default:
      return state;
  }
};

export default tagsReducer;