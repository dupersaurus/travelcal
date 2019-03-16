import React, { Component } from 'react';

import { createStore } from "redux"
import { Provider } from "react-redux"
import travelCalApp from "./reducers"

import './App.css';
import Calendar from "./containers/CalendarContainer"

import {addDestination} from "./actions/destinations"

const store = createStore(travelCalApp);
store.dispatch(addDestination(1, "2019-03-13", "2019-03-21", "#c00"))
store.dispatch(addDestination(2, "2019-03-16", "2019-03-18", "#0c0"))
store.dispatch(addDestination(3, "2019-03-18", "2019-03-20", "#00c"))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="app-calendar">
            <Calendar />
          </div>
          <div className="app-sidebar">
          
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
