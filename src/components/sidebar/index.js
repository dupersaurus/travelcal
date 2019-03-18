import React, { Component, Fragment } from 'react'
import { Route, Switch } from "react-router-dom";

import Trip from "../../containers/TripContainer"
import Day from "../day"

export default class SidebarRouter extends Component {
  render() {
    const allProps = {
      trip: this.props.trip,
      destinations: this.props.destinations,
      events: this.props.events
    }
    
    return (
      <Fragment>
        <Switch>
          <Route 
            path="/day/:date" 
            render={props => <Day {...props} {...allProps} />} />
          <Route 
            exact path="/" 
            component={Trip}
          />
        </Switch>
      </Fragment>
    )
  }
}
