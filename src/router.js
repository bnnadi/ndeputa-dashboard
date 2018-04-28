import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';

import App from './views/App/App';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => isLoggedIn ? <Component {...props} />: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
  />
);

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
     <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={'/login'}
          component={asyncComponent(() => import('./views/Auth/login'))}
        />
        <Route
          exact
          path={'/404'}
          component={asyncComponent(() => import('./views/Error/404'))}
        />
        <Route
          exact
          path={'/500'}
          component={asyncComponent(() => import('./views/Error/500'))}
        />
        <Route
          exact
          path={'/forgotpassword'}
          component={asyncComponent(() => import('./views/Auth/forgotPassword'))}
        />
        <Route
          exact
          path={'/resetpassword'}
          component={asyncComponent(() => import('./views/Auth/resetPassword'))}
        />
        <RestrictedRoute
          path='/dashboard'
          component={App}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </ConnectedRouter>
  )
}

export default connect(state => ({
  isLoggedIn: state.Auth.get('token') !== null
})
)(PublicRoutes);





