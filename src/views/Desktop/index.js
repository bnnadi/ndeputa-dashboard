import React, { Component } from "react";
import { Layout } from 'antd';
import { DesktopWrapper } from './desktop.style';

const { Content } = Layout;
class Desktop extends Component {
    render() {
        return(
        <DesktopWrapper>
         <Layout>
         <Content>Hello World!</Content>
         </Layout>
        </DesktopWrapper>
        );
    }
}

export default Desktop;