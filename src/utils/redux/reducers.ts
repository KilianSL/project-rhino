import {combineReducers, createStore, Action } from 'redux';

// App metadata
const app = (state={name:""}, action: Action) => { // action has its type explicitely defined because it is not given a default to infer from
    return {
      name: 'Project Rhino'
    }
  };

const createPostDialog = (state={open: false}, action : Action) => {
  switch (action.type) {
    case "TOGGLE_CREATE_POST_DIALOG":
      console.log("Post Window Visible: ", !state.open);
      return {open : !state.open};
    default:
      return state;
  }
}

const reducer = combineReducers({app, createPostDialog});

const store = createStore(reducer);
export default store;

