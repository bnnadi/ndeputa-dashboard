import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from 'antd';
import { TodoWrapper } from './todo.style';

const { Content } = Layout;
class Todo extends Component {
    render() {
        return(
        <TodoWrapper>
        <div style={{ width: "340px" }}>
        </div>
         <Layout>
            <Content>Hello From Todo!</Content>
         </Layout>
        </TodoWrapper>
        );
    }
}

export default connect(
    state => ({}),
    {}
)(Todo);