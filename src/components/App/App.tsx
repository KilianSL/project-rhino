import React from 'react';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from '../../utils';

import {NotFound, AppRoutes} from '../../components';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
        <Helmet>
          <title>{store.getState().app.name}</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> {/* Roboto Font */}
          <meta 
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          /> {/*viewport meta for scaling material UI components*/}
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
