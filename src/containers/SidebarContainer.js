import { connect } from "react-redux"

import Sidebar from "../components/sidebar"

const mapStateToProps = state => {
    return {...state}
}

const SidebarContainer = connect(
    mapStateToProps
)(Sidebar)

export default SidebarContainer