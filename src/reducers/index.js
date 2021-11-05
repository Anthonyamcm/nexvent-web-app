import { combineReducers } from 'redux';
import auth from './auth/auth';

const appReducers = combineReducers({
    me: auth
})

export default function rootReducer(state, action) {
    // THE SETUP FOR ASSIGNING INITIAL STATE VIA THIS METHOD IS NOT WORKING FOR SOME REASON
    // RIGHT NOW USE THE INITIAL STATE BY ASSIGN IT IN INDIVIDUAL REDUCER
    // if (action.type) {
    //   const prvState = Object.assign({}, state);
    //   state = Object.assign(prvState, { ...initialState });
    // }
  
    return appReducers(state, action);
  }
  