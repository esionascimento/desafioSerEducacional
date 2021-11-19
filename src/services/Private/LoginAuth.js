import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const LoginAuth = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
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
  location: PropTypes.func,
}
