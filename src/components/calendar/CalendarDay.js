import React, { Component } from 'react'
import './CalendarDay.css'

export default class CalendarDay extends Component {

    render() {
        return (
        <div className="day">
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
}
