import {destinations} from "./destinations"
import {events} from "./events"

const initialState = {
    destinations: [],
    events: []
}

function travelCalApp(state = initialState, action) {
    return {
        destinations: destinations(state.destinations, action),
        events: events(state.events, action)
    }
}

export default travelCalApp