import * as actionTypes from '../actionTypes';

export const getNews = () => ({ type: actionTypes.NEWS_REQUESTED });
export const receiveNews = (payload) => ({ type: actionTypes.NEWS_RECEIVED, payload });
export const rejectNews = (error) => ({ type: actionTypes.NEWS_REJECTED, error });
export const requestTokenRefresh = () => ({ type: actionTypes.TOKEN_REFRESH_REQUESTED });
export const approveLogout = () => ({ type: actionTypes.LOGOUT_APPROVED });
export const declineLogout = () => ({ type: actionTypes.LOGOUT_DECLINED });
export const singUp = (payload) => ({ type: actionTypes.SING_UP, payload });
export const singUpApproved = () => ({ type: actionTypes.SING_UP_APPROVED});
export const singUpError = (error) => ({ type: actionTypes.SING_UP_ERROR, error});
export const loginRequested = (payload) => ({ type: actionTypes.LOGIN_REQUESTED, payload});
export const loginApproved = (payload) => ({ type: actionTypes.LOGIN_APPROVED,payload});
export const loginDeclined = () => ({ type: actionTypes.LOGIN_DECLINED});