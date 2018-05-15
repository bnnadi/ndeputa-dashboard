import instance from './base';
import { getToken } from '../helpers/utility';
import Log from '../helpers/Log';

const token = getToken();
Log.info(token, 'Get Token')
if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export const productService = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};

  function getProducts() {
  return instance.get('products.json');
};

function getProduct() {
  return instance.get('product.json');
};

function addProduct() {
  return instance.get('product.json');
};

function updateProduct() {
  return instance.get('product.json');
};

function deleteProduct() {
  return instance.get('product/:id.json');
};