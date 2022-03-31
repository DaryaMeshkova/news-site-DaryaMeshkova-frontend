import { put, takeLatest } from 'redux-saga/effects';

import { NUMBER_REQUESTED, NUMBER_RECEIVED, NUMBER_REJECTED } from '../actionTypes';


const initialState = {
  cost: [],
  loading: false,
  error: null,
};

const numberReducer = (state = initialState, action = {}) => {

  switch (action.type) {
    case NUMBER_REQUESTED:
      return { ...state, loading: true, error: null };
    case NUMBER_RECEIVED:
      return {
        ...state, cost: action.payload, loading: false, error: null,
      };
      case NUMBER_REJECTED:
        return {
          ...state, cost: action.payload, loading: false, error: action.error,   
        }
   
    default:
      return state;
  }
};

export default numberReducer;