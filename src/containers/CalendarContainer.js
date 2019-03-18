import { connect } from "react-redux"

import Calendar from "../components/calendar/Calendar"

const mapStateToProps = state => {
    return {...state}
}

const CalendarContainer = connect(
    mapStateToProps
)(Calendar)

export default CalendarContainer