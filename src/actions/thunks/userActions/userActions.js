import {
    AUTH_USER_PENDING,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    // CHECK_USER_LOGGED_IN_PENDING,
    CHECK_USER_LOGGED_IN_SUCCESS,
    CHECK_USER_LOGGED_IN_ERROR,
    USER_LOGOUT_PENDING,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_ERROR,
    RESET_STATE,
    UPDATE_ME,
  } from '../../actionTypes/actionTypes';
  import constant from '../../../utils/constant/constant.js';
  import API from '../../../utils/api';
  
  const isAuthorized = () => (dispatch) => {
    // dispatch({ type: CHECK_USER_LOGGED_IN_PENDING });
    const user = localStorage.getItem('session') ? JSON.parse(localStorage.getItem('session')) : null;
    if (user) {
      dispatch({ type: CHECK_USER_LOGGED_IN_SUCCESS, payload: user });
      return true;
    }
    dispatch({ type: CHECK_USER_LOGGED_IN_ERROR });
    return false;
  };
  
  const authenticateUser = (credentials, callback) => async (dispatch) => {
    try {
      dispatch({ type: AUTH_USER_PENDING });
      const res = await API.AUTHENTICATION().login(credentials);
      if (res.status === constant.RES_STATUS.SUCCESS) {
        console.log('callback', callback);
  
        if (callback) {
          console.log('callback', callback);
          callback(res);
        }
        dispatch({ type: AUTH_USER_SUCCESS, payload: res.result });
        return true;
      }
      throw Error(res.message);
    } catch (error) {
      dispatch({ type: AUTH_USER_ERROR, payload: error.message });
      return false;
    }
  };
  
  const updateMe = (data) => (dispatch) => {
    dispatch({ type: UPDATE_ME, payload: data });
  };
  
  const userLogout = () => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGOUT_PENDING });
      const res = await API.AUTHENTICATION().logout();
      if (res.status === constant.RES_STATUS.SUCCESS) {
        dispatch({ type: USER_LOGOUT_SUCCESS });
        dispatch({ type: RESET_STATE });
      } else throw Error(res.message);
    } catch (error) {
      dispatch({ type: USER_LOGOUT_ERROR, payload: error.message });
    }
  };
  
  export { isAuthorized, authenticateUser, userLogout, updateMe };