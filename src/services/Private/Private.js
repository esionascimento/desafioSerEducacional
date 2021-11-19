import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../util/verifyLogin';

function RoutesPrivate ({ component: Component, ...rest }) {
  const [fact, setFact] = useState(false);

  useEffect(async () => {
    const data = await auth();
    if (data){
      setFact(true);
    }
  }, []);
  
  return (
    <Route
      {...rest}
      render={(props) => fact
        ? <Component {...rest} />
        : <Redirect to={{ pathname: "/not-found", state: { from: props.location } } }/>
      }
    />
  )
}

RoutesPrivate.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}

export default RoutesPrivate;