import {destinations} from "./destinations"
import {events} from "./events"
import {trip} from "./trip"

const initialState = {
    destinations: [],
    events: [],
    trip: {name: "Unnamed Trip", start: null, end: null}
}

function travelCalApp(state = initialState, action) {
    return {
        destinations: destinations(state.destinations, action),
        events: events(state.events, action),
        trip: trip(state.trip, action)
    }
}

export default travelCalApp