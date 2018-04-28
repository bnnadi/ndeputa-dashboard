import React, { Component } from "react";
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { ProfileWrapper } from './profile.style';

const { Content } = Layout;
class Profile extends Component {
    render() {
        return(
        <ProfileWrapper>
         <Layout>
         <Content>This is Profile page!</Content>
         </Layout>
        </ProfileWrapper>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(Profile);