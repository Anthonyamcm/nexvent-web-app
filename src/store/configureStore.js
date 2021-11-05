import { createStore, compose, applyMiddleware } from 'redux';
import throttle from 'lodash.throttle';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { saveState, loadState } from './sessionStorage';
import { saveSession, loadSession } from './localStorage';
import rootReducer from '../reducers';

const configureStore = () => {
  const history = createBrowserHistory();

  const enhancers = [];
  let middlewares;

  // add redux devtool for development
  if (process.env.NODE_ENV === 'development') {
    middlewares = [routerMiddleware(history), thunk];
    const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
    if (typeof __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      enhancers.push(__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
    }
  } else {
    middlewares = [routerMiddleware(history), thunk];
  }

  const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);
  const persistedState = { ...loadState(), ...loadSession() };

  const store = createStore(rootReducer, persistedState, composedEnhancers);

  store.subscribe(
    throttle(() => {
      saveState({
        companyInfo: store.getState().companyInfo,
        signatoryInfo: store.getState().signatoryInfo,
        selectedCardType: store.getState().selectedCardType,
        appointedAdminInfo: store.getState().appointedAdminInfo,
        adminToken: store.getState().adminToken,
        adminUserInfo: store.getState().adminUserInfo,
        signicatKYB: store.getState().signicatKYB,
        registerCardApplication: store.getState().registerCardApplication,
        creditApplication: store.getState().creditApplication,
        cardManagement: store.getState().cardManagement,
        stepIndicator: store.getState().stepIndicator,
        compliantFormStatement: store.getState().compliantFormStatement,
        compliantFormKeyPerson: store.getState().compliantFormKeyPerson,
        compliantFormRightHolders: store.getState().compliantFormRightHolders,
        compliantFormTaxReport: store.getState().compliantFormTaxReport,
        compliantFormSignatoryDeclaration: store.getState().compliantFormSignatoryDeclaration,
        requestAuthorisation: store.getState().requestAuthorisation,
        confirmationLogin: store.getState().confirmationLogin,
        emailInvitationInformation: store.getState().emailInvitationInformation,
        redis: store.getState().redis,
        adminOnboarding: store.getState().adminOnboarding,
        signatoryOnboarding: store.getState().signatoryOnboarding,
      });
      saveSession({
        me: store.getState().me,
      });
    }, 3000),
  );
  return store;
};
export default configureStore;