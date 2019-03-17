import React, { Component } from 'react';

import { createStore } from "redux"
import { Provider } from "react-redux"
import travelCalApp from "./reducers"

import './App.css';
import Calendar from "./containers/CalendarContainer"

import {addDestination} from "./actions/destinations"
import {addEvent, updateEventName, updateEventDate} from "./actions/events"

const store = createStore(travelCalApp);
store.dispatch(addDestination(1, "2019-03-13", "2019-03-21", "#c00"))
store.dispatch(addDestination(2, "2019-03-16", "2019-03-18", "#0c0"))
store.dispatch(addDestination(3, "2019-03-18", "2019-03-20", "#00c"))
store.dispatch(addDestination(4, "2019-03-21", "2019-03-22", "#cc0"))
store.dispatch(addDestination(5, "2019-03-23", "2019-03-24", "#0cc"))

store.dispatch(addEvent(1))
store.dispatch(updateEventName(1, "All Day Event"))
store.dispatch(updateEventDate(1, "1-1", "2019-03-13 00:00", "2019-03-13 23:59"))

store.dispatch(addEvent(2))
store.dispatch(updateEventName(2, "Partial Day"))
store.dispatch(updateEventDate(2, "2-1", "2019-03-13 9:30", "2019-03-13 13:00"))

store.dispatch(addEvent(3))
store.dispatch(updateEventName(3, "Two Days"))
store.dispatch(updateEventDate(3, "3-1", "2019-03-14 9:30", "2019-03-15 13:00"))

store.dispatch(addEvent(4))
store.dispatch(updateEventName(4, "Three Days"))
store.dispatch(updateEventDate(4, "3-1", "2019-03-16 9:30", "2019-03-18 13:00"))

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
