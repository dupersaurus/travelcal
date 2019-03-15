import _ from "lodash"

import {DestinationActions} from "../actions/destinations"

const initial = {
    id: null,
    origin: null,
    destination: null
}

export function destinations(state = [], action) {
    switch (action.type) {
        case DestinationActions.Add:
            return add(state, action);

        case DestinationActions.Remove:
            return remove(state, action);

        case DestinationActions.UpdateOrigin:
            return updateOrigin(state, action);

        case DestinationActions.UpdateDestination:
            return updateDestination(state, action);

        default:   
            return state;
    }
}

function add(state, action) {
    return [
        ...state,
        Object.assign(_.clone(initial), {id: action.id})
    ]
}

function remove(state, action) {
    const destinations = [...state];
    _.remove(destinations, (destination) => destination.id === action.id);

    return destinations;
}

function updateOrigin(state, action) {
    const destinations = [...state];
    const dest = findMatch(action.id, destinations);

    if (dest == null) {
        return state;
    }

    const {match, index} = dest;
    match.origin = action.origin;
    destinations[index] = match;

    return destinations;
}

function updateDestination(state, action) {
    const destinations = [...state];
    const dest = findMatch(action.id, destinations);

    if (dest == null) {
        return state;
    }

    const {match, index} = dest;
    match.destination = action.destination;
    destinations[index] = match;

    return destinations;
}

function findMatch(id, destinations) {
    const index = destinations.findIndex((destination) => destination.id === id);

    if (index === -1) {
        return null;
    }

    return {match: destinations[index], index}
}