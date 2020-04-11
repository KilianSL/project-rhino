import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';

import NotFound from './components/general/NotFound';
import AppRoutes from './components/app/AppRoutes';

// Not needed???
import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
history.listen((location, action) => {
  window.scrollTo(0,0)
})

// App metadata
const app = (state={}, action: object) => { // action has its type explicitely defined because it is not given a default to infer from
  return {
    name: 'Project Rhino'
  }
}

const reducer = combineReducers({app});

export const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
        <Helmet>
          <title>{store.getState().app.name}</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> {/* Roboto Font */}
        </Helmet>
        <Switch>
          <Route path="/" component={AppRoutes} />
          <Route path="" component={NotFound} />
        </Switch> 
      </div>
      </Router>
    </Provider>
  );
}

export default App;
