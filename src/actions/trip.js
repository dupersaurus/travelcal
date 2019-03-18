export const TripActions = {
    UpdateName: "update-trip-name",
    UpdateTripDates: "update-trip-dates",
}

export function updateTripName(name) {
    return {type: TripActions.UpdateName, name};
}

export function updateTripDates(start, end) {
    return {type: TripActions.UpdateTripDates, start, end};
}