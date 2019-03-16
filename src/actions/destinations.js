export const DestinationActions = {
    Add: "destination-add",
    Remove: "destination-remove",
    UpdateOrigin: "desination-update-origin",
    UpdateDestination: "destination-update-destination",
    UpdateStartDate: "destination-update-startdate",
    UpdateEndDate: "destination-update-enddate",
}

export function addDestination(id, start, end, color) {
    return {type: DestinationActions.Add, props: {id, start, end, color}};
}

export function removeDestination(id) {
    return {type: DestinationActions.Remove, id};
}

export function updateOrigin(id, origin) {
    return {type: DestinationActions.UpdateOrigin, id, origin};
}

export function updateDestination(id, destination) {
    return {type: DestinationActions.UpdateDestination, id, destination};
}

export function updateStartDate(id, date) {
    return {type: DestinationActions.UpdateStartDate, id, date};
}

export function updateEndDate(id, date) {
    return {type: DestinationActions.UpdateEndDate, id, date};
}