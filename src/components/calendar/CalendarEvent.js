import React, { Component } from 'react'
import { EVENT_DATE_FORMAT, MINUTES_IN_DAY, isEventAllDay } from "../../utils/dateUtils"

import "./CalendarEvent.css"

const moment = require('moment');

export default class CalendarEvent extends Component {
    render() {
        return (
            <div className="calendar-event">
                <div>
                    <span className="event-name">
                        {this.props.event.event.name} 
                    </span>
                    <span className="event-time">
                        {this.drawTime()}
                    </span>
                </div>
                <div className="event-span">
                    {this.drawTimeSpan()}
                </div>
            </div>
        )
    }

    drawTime() {
        const day = this.props.day;

        // just doing one date per event for now
        for (let date of this.props.event.dates) {
            const start = moment(date.start, EVENT_DATE_FORMAT);
            const end = moment(date.end, EVENT_DATE_FORMAT);

            if (isEventAllDay(day, start, end)) {
                return "All Day"
            } else {
                if (day.isSame(start, "day") && day.isSame(end, "day")) {
                    return `${start.format("h:mm")}-${end.format("h:mm")}`
                }

                if (day.isSame(start, "day")) {
                    return `${start.format("h:mm a")} ->`
                } else {
                    return `<- ${end.format("h:mm a")}`
                }
            }
        }
    }

    drawTimeSpan() {
        const day = this.props.day;

        // just doing one date per event for now
        for (let date of this.props.event.dates) {
            const start = moment(date.start, EVENT_DATE_FORMAT);
            const end = moment(date.end, EVENT_DATE_FORMAT);

            const startMinutes = start.minutes() + start.hours() * 60;
            const endMinutes = end.minutes() + end.hours() * 60;

            let startPct = "0%";
            let endPct = "0%";

            if (!isEventAllDay(day, start, end)) {
                if (day.isSame(start, "day") && day.isSame(end, "day")) {
                    startPct = this.calculateStartPct(startMinutes);
                    endPct = this.calculateEndPct(endMinutes);
                }

                if (day.isSame(start, "day")) {
                    startPct = this.calculateStartPct(startMinutes);
                } else {
                    endPct = this.calculateEndPct(endMinutes);
                }
            }

            return (
                <div 
                    className="span-caret" 
                    style={{left: startPct, right: endPct}}
                />
            )
        }
    }

    calculateStartPct(minutes) {
        return `${(minutes / MINUTES_IN_DAY) * 100}%`
    }

    calculateEndPct(minutes) {
        return `${((MINUTES_IN_DAY - minutes) / MINUTES_IN_DAY) * 100}%`
    }
}
