import React, { Component } from 'react'
import './CalendarDay.css'
import CalendarEvent from "./CalendarEvent"

import {EVENT_DATE_FORMAT} from "../../dateUtils"

const moment = require('moment');

export default class CalendarDay extends Component {

    /**
     * Find the destinations matching day.
     */
    findDestinations() {
        const matches = [];

        if (this.props.destinations == null) {
            return [];
        }

        this.props.destinations.forEach((destination) => {
            const start = moment(destination.start);
            const end = moment(destination.end);

            if (this.props.day.isBetween(start, end, "day", "[]")) {
                matches.push(destination);
            }
        })

        return matches;
    }

    findEvents() {
        const events = [];

        if (this.props.events == null) {
            return events;
        }

        this.props.events.forEach((event) => {
            let dates = [];

            for (let date of event.dates) {
                const start = moment(date.start, EVENT_DATE_FORMAT);
                const end = moment(date.end, EVENT_DATE_FORMAT);

                if (start.isSame(end, "day")) {
                    if (start.isSame(this.props.day, "day")) {
                        dates.push(date)
                        break;
                    }
                } else if (this.props.day.isBetween(start, end, "day", "[]")) {
                    dates.push(date)
                    break;
                }
            }

            if (dates.length > 0) {
                events.push({event, dates});
            }
        })

        return events;
    }

    render() {
        return (
        <div className="day">
            <div className="destination-bar">
                {this.drawDestination()}
            </div>

            <div className="events">
                {this.drawEvents()}
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
        let isOverlap = false;

        if (matches.length === 0) {
            return null;
        }

        // if end date equals start date, then the two don't overlap
        // 
        if (matches.length == 2) {
            isOverlap = !(matches[0].start === matches[1].end || matches[0].end === matches[1].start);
        }

        body = (
            <div className={`destinations count-${matches.length} ${isOverlap ? "flex-column" : ""}`}>
                {
                    matches.map((match, index) => (
                        <div key={index} 
                            className="destination" 
                            style={{backgroundColor: match.color}} />
                    ))
                }
            </div>
        )

        return body;
    }

    drawEvents() {
        const events = this.findEvents();

        if (events.length === 0) {
            return null;
        }

        return (
            <div className="calendar-events">
                {
                    events.map((event) => (
                        <CalendarEvent
                            key={event.event.id}
                            day={this.props.day}
                            event={event}
                        />
                    ))
                }
            </div>
        )
    }
}
