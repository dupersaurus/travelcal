import _ from "lodash"

import {TripActions} from "../actions/trip"

export function trip(state = {name: "Unnamed Trip", start: null, end: null}, action) {

    switch (action.type) {
        case TripActions.UpdateName:
            return updateName(state, action);

        case TripActions.UpdateTripDates:
            return updateDates(state, action);

        default:
            return state;
    }
}

function updateName(state, action) {
    return Object.assign(state, {name: action.name});
}

function updateDates(state, action) {
    console.log(action);

    const startDate = action.start ? {start: action.start} : {}
    const endDate = action.end ? {end: action.end} : {}

    return _.extend(state, startDate, endDate);
}