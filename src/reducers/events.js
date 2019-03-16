import _ from "lodash"

import {EventActions} from "../actions/events"

/**
 * @typedef {Object} EventInfo
 * @property {string} id
 * @property {string} name
 * @property {EventDate[]} dates
 */

/**
 * A date and time for an event
 * @typedef {Object} EventDate
 * @property {string} id
 * @property {string} start
 * @property {string} end
 */

const initial = {
    id: null,
    name: null,
    dates: []
}

export function events(state = [], action) {
    switch (action.type) {
        case EventActions.Add:
            return add(state, action);

        case EventActions.Remove:
            return remove(state, action);

        case EventActions.UpdateName:
            return updateName(state, action);

        case EventActions.UpdateDate:
            return updateDate(state, action);

        case EventActions.RemoveDate:
            return removeDate(state, action);

        default:
            return state;
    }
}

/**
 * Add new event
 * @param {EventInfo[]} state 
 * @param {string} action.type 
 * @param {string} action.id 
 */
function add(state, action) {
    return [
        ...state,
        Object.assign(_.clone(initial), {id: action.id})
    ]
}

/**
 * Remove existing event
 * @param {EventInfo[]} state 
 * @param {string} action.type 
 * @param {string} action.id 
 */
function remove(state, action) {
    const events = [...state];
    _.remove(events, (event) => event.id === action.id);

    return events;
}

/**
 * Update the event's name
 * @param {EventInfo[]} state List of events 
 * @param {string} action.type 
 * @param {string} action.id 
 * @param {string} action.name The new name
 */
function updateName(state, action) {
    const events = [...state];
    const matchInfo = findMatch(action.id, events);

    if (matchInfo == null) {
        return state;
    }

    const {match, index} = matchInfo;
    match.name = action.name;
    events[index] = match;

    return events;
}

/**
 * Add or remove 
 * @param {EventInfo[]} state List of events 
 * @param {string} action.type 
 * @param {string} action.id 
 * @param {string} action.dateId
 * @param {string} action.start
 * @param {string} action.end
 */
function updateDate(state, action) {
    const events = [...state];
    const matchInfo = findMatch(action.id, events);

    if (matchInfo == null) {
        return state;
    }

    const {match} = matchInfo;
    
    const date = match.dates.find((date) => date.id === action.dateId);

    if (date) {
        date.start = action.start;
        date.end = action.end;
    } else {
        match.dates.push({
            id: action.dateId,
            start: action.start,
            end: action.end
        })
    }

    return events;
}

/**
 * Remove a date from the event
 * @param {EventInfo[]} state 
 * @param {string} action.type 
 * @param {string} action.id 
 * @param {string} action.dateId
 */
function removeDate(state, action) {
    const events = [...state];
    const matchInfo = findMatch(action.id, events);

    if (matchInfo == null) {
        return state;
    }

    const {event} = matchInfo;
    _.remove(event.dates, (date) => date.id === action.dateId)

    return events;
}

function findMatch(id, events) {
    const index = events.findIndex((event) => event.id === id);

    if (index === -1) {
        return null;
    }

    return {match: events[index], index}
}