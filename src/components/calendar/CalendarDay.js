import React, { Component } from 'react'
import './CalendarDay.css'

const moment = require('moment');

export default class CalendarDay extends Component {

    /**
     * Find the destinations matching day.
     */
    findDestinations() {
        const destinations = this.props.destinations;
        const matches = [];

        destinations.forEach((destination) => {
            const start = moment(destination.start);
            const end = moment(destination.end);

            if (this.props.day.isBetween(start, end, "day", "[]")) {
                matches.push(destination);
            }
        })

        return matches;
    }

    render() {
        return (
        <div className="day">
            <div className="destination-bar">
                {this.drawDestination()}
            </div>

            <div className="label">
                {this.drawDate()}
            </div>
        </div>
        )
    }

    drawDate() {
        if (this.props.day.date() === 1 || this.props.firstDay) {
            return this.props.day.format("MMM D");
        } else {
            return this.props.day.format("D");
        }
    }

    drawDestination() {
        const matches = this.findDestinations();
        let body = null;

        if (matches.length === 0) {
            return null;
        }

        body = (
            <div className={`destinations count-${matches.length}`}>
                {
                    matches.map((match) => (
                        <div className="destination" 
                            style={{backgroundColor: match.color}} />
                    ))
                }
            </div>
        )

        return body;
    }
}
