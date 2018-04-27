import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import timesheetActions from "../../redux/tmesheet/action";
class Timesheets extends Component {
    state = {
      selected: []
    };

    componentDidMount() {
        // const { initialInvoices, initData } = this.props;
        // if (!initialInvoices) {
        //   initData();
        // }
    }
}
function mapStateToProps(state) {
    return {
      ...state.Timesheets.toJS()
    };
  }
  export default connect(mapStateToProps, timesheetActions)(Timesheets);