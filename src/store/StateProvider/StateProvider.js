import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();

const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);
StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired, // eslint-disable-line
  initialState: PropTypes.object.isRequired, // eslint-disable-line
  children: PropTypes.object.isRequired, // eslint-disable-line
};
export { StateProvider };

export const useStateValue = () => useContext(StateContext);