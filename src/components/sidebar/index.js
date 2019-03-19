import React, { Component, Fragment } from 'react'
import { Route, Switch } from "react-router-dom";

import Trip from "../../containers/TripContainer"
import Day from "../../containers/DayContainer"

export default class SidebarRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route 
            path="/day/:date" 
            component={Day}
          />
          <Route 
            exact path="/" 
            component={Trip}
          />
        </Switch>
      </Fragment>
    )
  }
}
