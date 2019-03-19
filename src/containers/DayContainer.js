import { connect } from "react-redux"

import Day from "../components/day"
//import {updateTripName, updateTripDates} from "../actions/trip"

const mapStateToProps = state => {
    return {trip: state.trip, destinations: state.destinations}
}

const mapDispatchToProps = (dispatch) => {
    return {
      /*onChangeName: (name) => dispatch(updateTripName(name)),
      onChangeStartDate: (date) => dispatch(updateTripDates(date, null)),
      onChangeEndDate: (date) => dispatch(updateTripDates(null, date)),*/
    }
  }

const DayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Day)

export default DayContainer