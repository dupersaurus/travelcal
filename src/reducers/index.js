import {destinations} from "./destinations"

const initialState = {
    destinations: []
}

function travelCalApp(state = initialState, action) {
    return {
        destinations: destinations(state.destinations, action)
    }
}

export default travelCalApp