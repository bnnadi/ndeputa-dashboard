import instance from './base';

export default { 
    getProducts() {
      return instance.get('products.json');
    },
    getProduct() {
       return instance.get('product.json');
    },
    addProduct() {
       return instance.get('product.json');
    },
    updateProduct() {
       return instance.get('product.json');
    },
    deleteProduct() {
       return instance.get('product/:id.json');
    },
}