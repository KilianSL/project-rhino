import React from 'react';
import {Helmet} from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from '../../utils';
import LandingPage from '../LandingPage/LandingPage';
import ErrorPage from '../ErrorPage/ErrorPage';

// APP PAGE - HANDLES ROUTING FOR ALL OF APP - PROVIDES STORE TO ALL COMPONENTS IN APP - HAS HELMET FOR META ETC.

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Helmet>
          <title>{store.getState().app.name}</title>
           {/*viewport meta for scaling material UI components*/}
          <meta 
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Helmet>

        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path ='' component={ErrorPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
