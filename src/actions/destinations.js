export const DestinationActions = {
    Add: "destination-add",
    Remove: "destination-remove",
    UpdateOrigin: "desination-update-origin",
    UpdateDestination: "destination-update-destination"
}

export function addDestination(id) {
    return {type: DestinationActions.Add, id};
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