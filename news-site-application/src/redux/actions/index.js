import * as actionTypes from '../actionTypes';

export const getNews = () => ({ type: actionTypes.NEWS_REQUESTED });
export const receiveNews = (payload) => ({ type: actionTypes.NEWS_RECEIVED, payload });
export const rejectNews = (error) => ({ type: actionTypes.NEWS_REJECTED, error });
