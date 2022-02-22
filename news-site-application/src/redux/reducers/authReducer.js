import {
  REGISTRATION_REQUESTED, REGISTRATION_APPROVED, REGISTRATION_DECLINED,
  LOGIN_REQUESTED, LOGIN_APPROVED, LOGIN_DECLINED,
  LOGOUT_REQUESTED, LOGOUT_APPROVED, LOGOUT_DECLINED,
  AUTHENTICATION_REQUESTED,
  TOKEN_REFRESH_REQUESTED, TOKEN_REFRESH_APPROVED, TOKEN_REFRESH_DECLINED,
} from '../actionTypes';

const initialState = {
  id: null,
  name: null,
  email: null,
  signupInformation: {},
  loginInformation: {},
  isPending: false,
  error: null,
  articles: [],
};
const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTRATION_REQUESTED:
      return { ...state, signupInformation: action.payload, isPending: true };
    case REGISTRATION_APPROVED:
      return { ...state, signupInformation: {}, isPending: false };
    case REGISTRATION_DECLINED:
      return {
        ...state, signupInformation: {}, isPending: false, error: action.error,
      };
    case LOGIN_REQUESTED:
      return { ...state, loginInformation: action.payload, isPending: true };
    case LOGIN_APPROVED:
      return {
        ...state,
        loginInformation: {},
        isPending: false,
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        error: null,
      };
    case LOGIN_DECLINED:
      return {
        ...state, loginInformation: {}, isPending: false, error: action.error,
      };
    case LOGOUT_REQUESTED:
      return {
        ...state, isPending: true,
      };
    case LOGOUT_APPROVED:
      return {
        ...state, id: null, name: null, email: null, isPending: false,
      };
    case LOGOUT_DECLINED:
      return {
        ...state, error: action.error, isPending: false,
      };
    case AUTHENTICATION_REQUESTED:
      return {
        ...state, isPending: true,
      };
    case TOKEN_REFRESH_REQUESTED:
      return {
        ...state, isPending: true,
      };
    case TOKEN_REFRESH_APPROVED:
      return {
        ...state, isPending: false,
      };
    case TOKEN_REFRESH_DECLINED:
      return {
        ...state, error: action.error, isPending: false,
      };
    default:
      return state;
  }
};
export default userReducer;
