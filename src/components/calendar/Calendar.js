import React, { Component } from 'react'
import './Calendar.css'
import CalendarDay from "./CalendarDay"

const moment = require('moment');

export default class Calendar extends Component {

    /**
     * 
     * @param {moment} start 
     * @param {moment} [end] 
     */
    generateView(start, end) {
        console.log(start)
        console.log(end)

        const beginning = moment(start).startOf("month").startOf("week");
        let ending = null;

        if (end) {
            ending = moment(end).endOf("month").endOf("week");
        } else {
            ending = moment(start).endOf("month").endOf("week");
        }

        console.log(beginning);
        console.log(ending);

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

    render() {
        const today = moment();
        const weeks = this.generateView(today);

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
                                                                    day={day} />)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
