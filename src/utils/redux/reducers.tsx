import {combineReducers, createStore } from 'redux';

// App metadata
const app = (state={}, action: object) => { // action has its type explicitely defined because it is not given a default to infer from
    return {
      name: 'Project Rhino'
    }
  };

const reducer = combineReducers({app});

const store = createStore(reducer);
export default store;

