import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthRoute = (props) => {
  const { isAuth, component: Component, ...restProps } = props;
  // ...restProps is remaining properties of the object that have not been deconstructed
  return (
    <Route
      {...restProps}
      render={
        (routeProps) => {
          if (isAuth) {
            return <Component {...routeProps} />;
          } else {
            return <Redirect to='/sign_in' />
          }
        }
      }
    />
  )
}

export default AuthRoute;
