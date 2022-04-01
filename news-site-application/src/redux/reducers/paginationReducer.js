

import { NUMBER_REQUESTED, NUMBER_RECEIVED, NUMBER_REJECTED } from '../actionTypes';


const initialState = {
  count: [],
};

const numberReducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case NUMBER_REQUESTED:
      return { 
        ...state, loading: true, error: null 
      };
    case NUMBER_RECEIVED:
      return {
        ...state, count: action.payload, loading: false, error: null,
      };
    case NUMBER_REJECTED:
      return {
        ...state, count: action.payload, loading: false, error: action.error,   
      }
    default:
      return state;
  }
};

export default numberReducer;