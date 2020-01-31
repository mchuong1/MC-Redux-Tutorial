import React from "react";
import { createStore } from "redux";
import todoApp from "../store/store.reducer";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "../store/store.actions";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      store: "bug"
    };
  }
  render() {
    return <div>Home Component This is {this.state.store}</div>;
  }

  componentDidMount() {
    const store = createStore(todoApp, ['Testing Initial State']);

    //log initial state
    console.log(store.getState());

    //Every time the state changes, log it
    //Note that subscribe() returns a function for unregistering the listener
    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    //Dispatch some actions
    store.dispatch(addTodo("Learn about actions"));
    store.dispatch(addTodo("Learn about reducers"));
    store.dispatch(addTodo("Learn about store"));
    store.dispatch(toggleTodo(0));
    store.dispatch(toggleTodo(1));
    store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

    //stop listening to state updates
    // unsubscribe()
  }
}

export default Home;
