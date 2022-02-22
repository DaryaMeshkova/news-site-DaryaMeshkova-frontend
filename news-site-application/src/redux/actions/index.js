import * as actionTypes from '../actionTypes';

export const getNews = () => ({ type: actionTypes.NEWS_REQUESTED });
export const receiveNews = (payload) => ({ type: actionTypes.NEWS_RECEIVED, payload });
export const rejectNews = (error) => ({ type: actionTypes.NEWS_REJECTED, error });
export const approveLogin = () => ({ type: actionTypes.LOGIN_REQUESTED });
export const declineLogin = () => ({ type: actionTypes.LOGIN_DECLINED });
export const requestTokenRefresh = () => ({ type: actionTypes.TOKEN_REFRESH_REQUESTED });
export const approveLogout = () => ({ type: actionTypes.LOGOUT_APPROVED });
export const declineLogout = () => ({ type: actionTypes.LOGOUT_DECLINED });
