import axios from 'axios';

import * as AuthService from '../services/authentication.service';
import { API_URL, API_VERSION } from '../constants/index';

// Here we can add everything we want to be used across all requests
const api = axios.create({
  baseURL: `${API_URL}/api/${API_VERSION}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(async options => {
  const token = await AuthService.getPortalAccessToken();
  const newOptions = options;
  newOptions.headers.Authorization = `Bearer ${token}`;

  return newOptions;
});

// If a request fails, we will fetch a new token and try the request again
api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const { response } = error;

    if (response && response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;

      const refreshToken = await AuthService.getPortalRefreshToken();
      const newToken = await AuthService.getNewAccessToken(refreshToken);
      const tokenType = await AuthService.getTokenType();

      axios.defaults.headers.common.Authorization = `${tokenType} ${newToken.access_token}`;

      return axios(originalRequest);
    }
    return response;
  }
);

export default api;
