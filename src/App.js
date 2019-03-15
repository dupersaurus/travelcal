import React, { Component } from 'react';

import { createStore } from "redux"
import travelCalApp from "./reducers"

import './App.css';
import Calendar from "./components/calendar/Calendar"

const store = createStore(travelCalApp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}

export default App;
