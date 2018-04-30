import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';

import productAction from '../../redux/product/actions'; 

class Product extends Component {
    state = {
        selected: []
    }
    componentDidMount() {
        // const { initData } = this.props;
        // initData();
    }
    render() {
        return(
            <LayoutWrapper>
                <PageHeader>
                    <IntlMessages id="sidebar.products"/>
                </PageHeader>
            </LayoutWrapper>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Product);
