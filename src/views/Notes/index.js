import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from 'antd';
import { NoteWrapper } from './note.style';

const { Content } = Layout;
class Notes extends Component {
    render() {
        return(
        <NoteWrapper>
        <div style={{ width: "340px" }}>
        </div>
         <Layout>
            <Content>Hello From Note!</Content>
         </Layout>
        </NoteWrapper>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(Notes);