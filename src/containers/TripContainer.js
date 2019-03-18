import { connect } from "react-redux"

import Trip from "../components/trip"
import {updateTripName, updateTripDates} from "../actions/trip"

const mapStateToProps = state => {
    return {trip: state.trip}
}

const mapDispatchToProps = (dispatch) => {
    return {
      onChangeName: (name) => dispatch(updateTripName(name)),
      onChangeStartDate: (date) => dispatch(updateTripDates(date, null)),
      onChangeEndDate: (date) => dispatch(updateTripDates(null, date)),
    }
  }

const TripContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Trip)

export default TripContainer