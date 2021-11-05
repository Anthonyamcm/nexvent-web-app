import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { v4 } from 'uuid';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { routes, redirects } from '../../utils/routes/routes';
import { isAuthorized } from '../../actions/thunks/userActions/userActions';
import { StateProvider } from '../../store/StateProvider/StateProvider';
import {storeLastUrl} from '../../utils/helper'


const Fallback = () => (
  <div className="fallback-loading"> 
  </div>
);
const PrivateRoute = (route) => {
  const { isAuthorizedDispatch } = route;
  storeLastUrl();
  return isAuthorizedDispatch() ? <Route {...route} /> : <Redirect from={route.path} to="/" />;
};
const Redirects = ({ redirectList }) =>
  redirectList.map((redirect) => (
    <Redirect from={redirect.from.toString()} to={redirect.to.toString()} exact={redirect.exact} key={v4()} />
  ));
const initialState = {
  onboarding: {},
  cards: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ONBOARDING':
      return {
        ...state,
        onboarding: { ...state.onboarding, ...action.value },
      };
    case 'CARDMANAGEMENT':
      return {
        ...state,
        cards: [...state.cards, action.value],
      };
    default:
      return state;
  }
};

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      storeLastUrl();
      return <Component {...props} />;
    }}
  />
);
PublicRoute.propTypes = {
  component: PropTypes.any.isRequired, // eslint-disable-line
};

const Root = ({ store, isAuthorizedDispatch }) => (
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <Provider store={store}>
          <Suspense fallback={<Fallback />}>
            <Switch>
              {routes.map((route, index) =>
                route.private ? (
                  <PrivateRoute
                    key={index.toString()}
                    {...route}
                    store={store}
                    isAuthorizedDispatch={isAuthorizedDispatch}
                  />
                ) : (
                  <PublicRoute key={index.toString()} {...route} store={store} />
                ),
              )}
              <Redirects redirectList={redirects} />
            </Switch>
          </Suspense>
        </Provider>
      </BrowserRouter>
    </StateProvider>
  </React.Fragment>
);
Root.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
  isAuthorizedDispatch: PropTypes.func.isRequired,
};
PrivateRoute.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  isAuthorizedDispatch: (cb) => dispatch(isAuthorized(cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
export { Root as TestRoot };
