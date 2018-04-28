import React, { Component } from "react";
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { ProfileWrapper } from './profile.style';

const { Content } = Layout;
class Settings extends Component {
    render() {
        return(
        <ProfileWrapper>
         <Layout>
         <Content>This is settings!</Content>
         </Layout>
        </ProfileWrapper>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(Settings);