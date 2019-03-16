import axios from 'axios';
import ApiError from './ApiError';
import ERRORS from './errorConstants';
import storage from './localStorage';
import BaseURL from '../utils/BaseUrl';

// eslint-disable-next-line no-unused-vars
const setupInterceptors = store => {
  axios.defaults.baseURL = BaseURL();
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;

  axios.interceptors.request.use(
    config => config
    , error => Promise.reject(error),
  );

  axios.interceptors.response.use(response => {
    // Process response body
    // use store.dispatch() to dispatch any redux ArticleActions
    if (response.status >= 500) {
      throw new ApiError(ERRORS.SERVER_ERROR);
    } else {
      throw new ApiError(ERRORS.CLIENT_ERROR);
    }
  }, error => Promise.reject(error));
};

/**
 * Set auth token as default in axios
 * @param token
 */
export const setAuthToken = (token = storage.getItem('accessToken')) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  }
};

setAuthToken();

export default setupInterceptors;
