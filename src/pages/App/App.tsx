import React from 'react';
import {Helmet} from 'react-helmet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {ThemeProvider} from '@material-ui/core';
import {store} from '../../utils';
import LandingPage from '../LandingPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import {theme} from '../../utils';

// APP PAGE - HANDLES ROUTING FOR ALL OF APP - PROVIDES STORE TO ALL COMPONENTS IN APP - HAS HELMET FOR META ETC.

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            <Route path='/app' exact component={LandingPage} />
            <Route path ='' component={ErrorPage} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
    
  );
}

export default App;
