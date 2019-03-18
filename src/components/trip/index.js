import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import {
    Typography,
    Button,
    TextField
  } from '@material-ui/core';

import "./trip.css"

const moment = require('moment');

export default class Trip extends Component {
    changeName(event) {
        this.props.onChangeName(event.target.value);
    }

    changeStartDate(event) {
        this.props.onChangeStartDate(event.target.value);
    }

    changeEndDate(event) {
        this.props.onChangeEndDate(event.target.value);
    }

    render() {
        console.log(this.props.trip.start)
        const defaultDate = moment().format("YYYY-MM-DD");
        const startDate = this.props.trip.start || defaultDate;
        const endDate = this.props.trip.end || defaultDate;

        return (
            <div className="trip-view">
                <div>
                    <Typography component="h4" variant="h4">Trip</Typography>
                </div>

                <form>
                    <div className="form-row">
                        <TextField 
                            className="margin-top"
                            id="trip-name"
                            name="trip-name"
                            placeholder="Unnamed Trip"
                            label="Trip Name"
                            value={this.props.trip.name}
                            variant="outlined"
                            fullWidth={true}
                            onChange={this.changeName.bind(this)}
                        />
                    </div>

                    <div className="form-row">
                        <Grid container justify="flex-start">
                            <TextField 
                                className="margin-top space-right"
                                id="trip-start"
                                name="trip-start"
                                type="date"
                                label="Start Date"
                                variant="outlined"
                                value={startDate}
                                onChange={this.changeStartDate.bind(this)}
                            />

                            <TextField 
                                className="margin-top"
                                id="trip-end"
                                name="trip-end"
                                type="date"
                                label="End Date"
                                variant="outlined"
                                value={endDate}
                                onChange={this.changeEndDate.bind(this)}
                            />
                        </Grid>
                    </div>
                </form>
            </div>
        )
    }
}
