import axios from 'axios';
import api from '../config';

const instance = axios.create({
  baseURL: api.url
});



export default instance;