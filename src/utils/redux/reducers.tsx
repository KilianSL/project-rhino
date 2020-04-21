import {combineReducers, createStore, Action } from 'redux';

// App metadata
const app = (state={name:""}, action: Action) => { // action has its type explicitely defined because it is not given a default to infer from
    return {
      name: 'Project Rhino'
    }
  };

const reducer = combineReducers({app});

const store = createStore(reducer);
export default store;

