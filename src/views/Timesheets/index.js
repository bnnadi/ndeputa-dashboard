import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TimesheetWrapper from './timesheet.style';
import timesheetActions from "../../redux/tmesheet/action";

const { Content } = Layout;
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
    render() {
      return(
      <TimesheetWrapper>
       <Layout>
       <Content>This is Profile page!</Content>
       </Layout>
      </TimesheetWrapper>
      );
  }
}
function mapStateToProps(state) {
    return {
      ...state.Timesheets.toJS()
    };
  }
  export default connect(mapStateToProps, timesheetActions)(Timesheets);