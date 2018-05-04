import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import PageHeader from '../../components/utility/pageHeader';
import IntlMessages from '../../components/utility/intlMessages';
import productAction from '../../redux/product/actions';
import Log from '../../helpers/Log';

const {
    fetchProducts,
    addProduct,
    editProduct,
    deleteProduct
} = productAction;

class Product extends Component {
    state = {
        selected: []
    }
    componentDidMount() {
        const { products, fetchProducts } = this.props;
        if (!products) {
            const result = fetchProducts();
            Log.info(result , 'Products Component fetching...');
        }
    }
    render() {
        const { selectedId, products } = this.props;
        const selectedProduct = selectedId ? products.filter(product => product.id === selectedId)[0] : null;    
        const otherAttributes = null;

        Log.info(products , 'Products Component');

        return(
            <LayoutWrapper>
                <PageHeader>
                    <IntlMessages id="sidebar.products"/>
                </PageHeader>
            </LayoutWrapper>
        )
    }
}
function mapStateToProps(state) {
    const { products, selectedId } = state.Product.toJS();
    return {
      products,
      selectedId
    };
  }

export default connect(mapStateToProps, {   
        fetchProducts,
        addProduct,
        editProduct,
        deleteProduct
})(Product);
