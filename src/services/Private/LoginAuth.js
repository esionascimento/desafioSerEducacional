import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { verifyJWT } from '../../util/verifyLogin';

export const LoginAuth = ({ component: Component, ...rest }) => {
  const isAuthenticated = verifyJWT();
  
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated
        ? <Redirect to={{ pathname: "/dashboard", state: { from: props.location } } }/>
        : <Component {...rest} />
      }
    />
  )
}

LoginAuth.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}
