import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

import RoutesPrivate from './services/Private/Private';
/* import LoginAuth from './services/Private/LoginAuth'; */

import Home from './pages/Home/index.js'
import Cadastro from './components/cadastro'
import Dashboard from './pages/Dashboard/index.js';
import NotFound from './pages/NotFound.js';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <RoutesPrivate exact path="/dashboard" component={Dashboard} />
            <Route exact path="/cadastro" component={() => <Cadastro />} />
            <Route exact path="/not-found" component={() => <NotFound />} />
          </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
