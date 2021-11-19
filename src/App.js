import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store/store';
import { Provider } from 'react-redux';

import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
