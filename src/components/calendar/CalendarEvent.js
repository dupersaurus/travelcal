import React, { Component } from 'react'
import { EVENT_DATE_FORMAT, isEventAllDay } from "../../dateUtils"

import "./CalendarEvent.css"

const moment = require('moment');

export default class CalendarEvent extends Component {
    render() {
        return (
            <div className="calendar-event">
                <span className="event-name">
                    {this.props.event.event.name} 
                </span>
                <span className="event-time">
                    {this.drawTime()}
                </span>
            </div>
        )
    }

    drawTime() {
        for (let date of this.props.event.dates) {
            const start = moment(date.start, EVENT_DATE_FORMAT);
            const end = moment(date.end, EVENT_DATE_FORMAT);

            if (isEventAllDay(this.props.day, start, end)) {
                return "All Day"
            } else {
                return `${start.format("h:mm")}-${end.format("h:mm")}`
            }
        }
    }
}
