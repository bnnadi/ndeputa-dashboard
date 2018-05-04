const productAction = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
  FETCH_PRODUCTS: 'FETCH_PRODUCTS',
  DELETE__PRODUCT: 'DELETE__PRODUCT',
  FETCH_ERROR: 'FETCH_ERROR',

  fetchProducts: () => {
    return (dispatch, getState) => {
      dispatch({
        type: productAction.FETCH_PRODUCTS,
      });
    };
  },
  addProduct: () => {
    return (dispatch, getState) => {
      const newProduct = {
        id: new Date(),
        note: 'New Note',
        createTime: new Date(),
        color: getState().Products.get('seectedColor'),
      };
      const products = [newProduct, ...getState().Products.get('products')];
      dispatch({
        type: productAction.ADD_PRODUCT,
        selectedId: newProduct.id,
        products,
      });
    };
  },
  editProduct: (id, newNote) => {
    return (dispatch, getState) => {
      const oldproducts = getState().Products.get('products');
      const products = [];
      oldproducts.forEach(note => {
        if (note.id !== id) {
          products.push(note);
        } else {
          note.note = newNote;
          products.push(note);
        }
      });
      dispatch({
        type: productAction.EDIT_PRODUCT,
        products,
      });
    };
  },
  deleteProduct: (id) => {
    return (dispatch, getState) => {
      const oldproducts = getState().Products.get('products');
      const products = [];
      oldproducts.forEach(product => {
        if (product.id !== id) {
          products.push(product);
        }
      });
      dispatch({
        type: productAction.DELETE__PRODUCT,
        products,
      });
    };
  },
};
export default productAction;