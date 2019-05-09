import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';
import './App.css';
import Signup from './components/signUp';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
