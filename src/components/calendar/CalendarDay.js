import React, { Component } from 'react'
import './CalendarDay.css'
import CalendarEvent from "./CalendarEvent"
import DestinationTimeline from "../destinationTimeline/DestinationTimeline"

import {EVENT_DATE_FORMAT} from "../../utils/dateUtils"
import {doDestinationsOverlap} from "../../utils/destination"

const moment = require("moment");
const classnames = require("classnames");

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
        const classes = classnames("day", {selected: this.props.isSelected, outside: !this.props.isInRange});

        return (
            <div className={classes} onClick={this.props.onViewDay}>
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
        return <DestinationTimeline day={this.props.day} destinations={this.props.destinations} />
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
