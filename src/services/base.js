import axios from 'axios';
import api from '../config';
import { getToken } from '../helpers/utility';

import Log from '../helpers/Log';

const instance = axios.create({
  baseURL: api.url
});


const token = getToken();
Log.info(token, 'Token')
if (token)
  instance.defaults.headers.common['x-access-token'] = token;

export default instance;