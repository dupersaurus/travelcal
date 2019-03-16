export const EventActions = {
    Add: "event-add",
    Remove: "event-remove",
    UpdateName: "event-set-name",
    UpdateDate: "event-add-date",
    RemoveDate: "event-remove-date"
}

export function addEvent(id) {
    return {type: EventActions.Add, id};
}

export function removeEvent(id) {
    return {type: EventActions.Remove, id};
}

export function updateEventName(id, name) {
    return {type: EventActions.UpdateName, id, name};
}

export function updateEventDate(id, dateId, start, end) {
    return {type: EventActions.UpdateDate, id, dateId, start, end};
}

export function removeEventDate(id, dateId) {
    return {type: EventActions.RemoveDate, id, dateId};
}