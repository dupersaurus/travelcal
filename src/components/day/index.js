import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Day extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.match.params.date}</h4>
                <Link to="/">Back to Trip</Link>
            </div>
        )
    }
}
