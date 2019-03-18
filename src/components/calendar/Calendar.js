import React, { Component } from 'react'
import './Calendar.css'
import CalendarDay from "./CalendarDay"

import {DESTINATION_DATE_FORMAT} from "../../dateUtils"

const moment = require('moment');

export default class Calendar extends Component {

    viewDay(date) {
        this.props.history.push(`/day/${date.format(DESTINATION_DATE_FORMAT)}`)
    }

    /**
     * Get which day is currently selected.
     * TODO find a better way to do it
     * @returns {string|null} The selected date, or null if not selected
     */
    getSelectedDay() {
        if (this.props.location.pathname.indexOf("/day/") > -1) {
            return this.props.location.pathname.split("/").pop();
        } else {
            return null;
        }
    }

    /**
     * 
     * @param {moment} start 
     * @param {moment} [end] 
     */
    generateView(start, end) {
        const beginning = moment(start).startOf("month").startOf("week");
        let ending = null;

        if (end) {
            ending = moment(end).endOf("month").endOf("week");
        } else {
            ending = moment(start).endOf("month").endOf("week");
        }

        const weeks = [];
        let iterator = beginning;
        let week = 0;

        while (iterator.isSameOrBefore(ending)) {
            if (weeks.length <= week) {
                weeks.push([]);
            }

            weeks[week].push(iterator);
            iterator = moment(iterator).add(1, "days");

            if (weeks[week].length === 7) {
                week++;
            }
        }

        return weeks;
    }

    isDayInRange(day) {
        if (this.props.trip.start == null && this.props.trip.end == null) {
            return true;
        }

        else if (this.props.trip.end == null) {
            const start = moment(this.props.trip.start);

            return day.isSameOrAfter(start);
        }

        else if (this.props.trip.start == null) {
            const end = moment(this.props.trip.end);

            return day.isSameOrBefore(end);
        }

        else {
            const start = moment(this.props.trip.start);
            const end = moment(this.props.trip.end);

            return day.isBetween(start, end, "day", "[]");
        }
    }

    render() {
        const today = moment();
        const weeks = this.generateView(today);
        const selectedDay = this.getSelectedDay();

        return (
            <div className="calendar">
                <div className="current-month">
                
                </div>
                <div className="container">
                    {
                        weeks.map((week, weekIndex) => {
                            return (
                                <div key={weekIndex} className="week">
                                    {week.map((day, dayIndex) => <CalendarDay 
                                        key={dayIndex} 
                                        firstDay={weekIndex === 0 && dayIndex === 0} 
                                        day={day}
                                        isSelected={day.format(DESTINATION_DATE_FORMAT) === selectedDay}
                                        isInRange={this.isDayInRange(day)}
                                        destinations={this.props.destinations}
                                        events={this.props.events}
                                        onViewDay={() => this.viewDay(day)}
                                    />)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
