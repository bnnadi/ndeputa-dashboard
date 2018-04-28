import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from 'antd';
import { DashboardWrapper } from './dashboard.style';

const { Content } = Layout;
class Dash extends Component {
    render() {
        return(
        <DashboardWrapper>
         <Layout>
         <Content>Hello World!</Content>
         </Layout>
        </DashboardWrapper>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(Dash);