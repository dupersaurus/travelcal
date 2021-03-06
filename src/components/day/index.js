import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import {
    Typography,
    Button,
    TextField
  } from '@material-ui/core';



const moment = require("moment");

export default class Day extends Component {
    render() {
        return (
            <div className="day-panel">
                <div className="header">
                    <Grid container justify="space-between">
                        <Typography component="h4" variant="h4">{this.drawTitle()}</Typography>
                        <Link to="/">Back to Trip</Link>
                    </Grid>
                </div>

                {this.drawDestinations()}
                
                <div className="events">
                
                </div>
            </div>
        )
    }

    drawTitle() {
        return moment(this.props.match.params.date).format("D MMM")
    }

    drawDestinations() {
        
    }

    drawEvents() {

    }
}
