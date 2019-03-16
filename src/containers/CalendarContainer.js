import { connect } from "react-redux"

import Calendar from "../components/calendar/Calendar"

const mapStateToProps = state => {
    return {
        destinations: state.destinations,
        events: state.events
    }
}

const CalendarContainer = connect(
    mapStateToProps
)(Calendar)

export default CalendarContainer