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
export const loginRequested = (payload, navigate) => ({ type: actionTypes.LOGIN_REQUESTED, payload, navigate});
export const loginApproved = (payload, navigate) => ({ type: actionTypes.LOGIN_APPROVED,payload, navigate});
export const loginDeclined = (error, navigate) => ({ type: actionTypes.LOGIN_DECLINED, error, navigate});
export const saveChange = (payload) => ({ type: actionTypes.SAVE_CHANGE, payload });
export const saveChangeSuccessesful = (payload) => ({ type: actionTypes.SAVE_CHANGE_SUCCESSESFUL, payload });
export const saveChangeError = (error) => ({ type: actionTypes.SAVE_CHANGE_ERROR, error });
export const newText = (payload) => ({type: actionTypes.NEW_TEXT, payload});
export const getNumber = () => ({ type: actionTypes.NUMBER_REQUESTED });
export const receiveNumber = (payload) => ({ type: actionTypes.NUMBER_RECEIVED, payload });
export const rejectNumber = (error) => ({ type: actionTypes.NUMBER_REJECTED, error });

export const addNews = (payload) => ({ type: actionTypes.ADD_NEWS_REQUESTED, payload });
export const addNewsReceive = (payload) => ({ type: actionTypes.ADD_NEWS_RECEIVED, payload });
export const addNewsReject = (error) => ({ type: actionTypes.ADD_NEWS_REJECTED, error });

