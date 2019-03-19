import React, { Component } from 'react'

import {getDestinationsForDay, doDestinationsJoin, doDestinationsOverlap} from "../../utils/destination"

import Destination from "./Destination"
import "./DestinationTimeline.css"

const classnames = require("classnames");

/**
 * Display a day's destinations as a timeline
 * @param {moment} day The day
 * @param {Object[]} destinations List of destinations for this day
 * @param {boolean} [big=false] Big or small mode
 */
export default class DestinationTimeline extends Component {
  render() {
        const destinations = getDestinationsForDay(this.props.day, this.props.destinations);
        
        switch (destinations.length) {
            default:
                return <div />

            case 1:
                return this.drawOneDestination(destinations);

            case 2:
                return this.drawTwoDestination(destinations);
        }
  }

  drawOneDestination(destinations) {
      return (
          <div className="destinations count-1">
            <Destination destination={destinations[0]} />
          </div>
      )
  }

  drawTwoDestination(destinations) {
      const isOverlap = doDestinationsOverlap(destinations[0], destinations[1]) !== 0;
      const classes = classnames("destinations", "count-2", {"flex-column": isOverlap});

      return (
        <div className={classes}>
            {
                destinations.map((destination) => <Destination key={destination.id} destination={destination} />)
            }
        </div>
    )
  }
}
