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
    return {
        ...state,
        name: action.name
    }
}

function updateDates(state, action) {
    return {
        ...state,
        start: action.start ? action.start : state.start,
        end: action.end ? action.end : state.end,
    }
}