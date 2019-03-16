import { connect } from "react-redux"

import Calendar from "../components/calendar/Calendar"

const mapStateToProps = state => {
    return {
        destinations: state.destinations
    }
}

const CalendarContainer = connect(
    mapStateToProps
)(Calendar)

export default CalendarContainer