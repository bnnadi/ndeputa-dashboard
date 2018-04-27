const userAction = {
  ADD_USER: 'ADD_USER',
  EDIT_USER: 'EDIT_USER',
  FETCH_USER: 'FETCH_USER',
 
  fetchUser: () => {
    return (dispatch, getState) => {
      const user = getState().User.get('user');
      dispatch({
        type: userAction.FETCH_USER,
        user: user
      });
    };
  },
  addUser: () => {
    return (dispatch, getState) => {
      const newProduct = {
        id: new Date(),
        note: 'New Note',
        createTime: new Date(),
        color: getState().Products.get('seectedColor'),
      };
      const products = [newProduct, ...getState().Products.get('products')];
      dispatch({
        type: userAction.ADD_USER,
        selectedId: newProduct.id,
        products,
      });
    };
  },
  editUser: (id, newNote) => {
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
        type: userAction.EDIT_USER,
        products,
      });
    };
  },
};
export default userAction;