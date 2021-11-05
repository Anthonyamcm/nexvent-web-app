import {
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_ERROR,
    AUTH_USER_SUCCESS,
    UPDATE_ME,
    RESET_STATE,
    CHECK_USER_LOGGED_IN_PENDING,
    CHECK_USER_LOGGED_IN_SUCCESS,
    CHECK_USER_LOGGED_IN_ERROR,
  } from '../../actions/actionTypes/actionTypes';
  import { clearAllStorage } from '../../utils/helper';
  
  const AccessUser = 'session';
  
  const setCurrentUser = (authReducer) => {
    localStorage.setItem(AccessUser, JSON.stringify(authReducer));
  };
  
  const authReducer = (state = null, action) => {
    switch (action.type) {
      case AUTH_USER_SUCCESS:
        setCurrentUser(action.payload);
        return { ...action.payload };
      case UPDATE_ME:
        setCurrentUser(action.payload);
        return { ...action.payload };
      case USER_LOGOUT_SUCCESS:
        clearAllStorage();
        return null;
      case USER_LOGOUT_ERROR:
        clearAllStorage();
        return null;
      case CHECK_USER_LOGGED_IN_PENDING:
        return state;
      case CHECK_USER_LOGGED_IN_SUCCESS:
        return { ...action.payload };
      case CHECK_USER_LOGGED_IN_ERROR:
        clearAllStorage();
        return state;
      case RESET_STATE:
        return null;
      default:
        return state;
    }
  };
  
  export default authReducer;