/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store';
import './App.css';
import Login from './components/login';
import Signup from './components/signUp';
import Dashboard from './components/dashBoard';

const App = () => {
  const { persistor, store } = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
