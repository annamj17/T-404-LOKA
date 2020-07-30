import axios from 'axios';
import { AsyncStorage } from 'react-native';
import FormData from 'form-data';

import { API_URL } from '../constants/index';

const TokenTypes = {
  PortalAccessToken: 'portalAccessToken',
  PortalRefreshToken: 'portalRefreshToken',
  LanguageCode: 'languageCode',
  TokenType: 'tokenType',
  TenantId: 'tenantId'
};

export const getPortalAccessToken = () => AsyncStorage.getItem(TokenTypes.PortalAccessToken);

export const getPortalRefreshToken = () => AsyncStorage.getItem(TokenTypes.PortalRefreshToken);

export const getTokenType = () => AsyncStorage.getItem(TokenTypes.TokenType);

const setTokenData = data => {
  AsyncStorage.setItem(TokenTypes.PortalAccessToken, data.access_token.toString());
  AsyncStorage.setItem(TokenTypes.PortalRefreshToken, data.refresh_token.toString());
  AsyncStorage.setItem(TokenTypes.LanguageCode, data.languageCode.toString());
  AsyncStorage.setItem(TokenTypes.TokenType, data.token_type.toString());
  AsyncStorage.setItem(TokenTypes.TenantId, data.tenantId.toString());
};

export const logout = () => {
  AsyncStorage.removeItem(TokenTypes.PortalAccessToken);
  AsyncStorage.removeItem(TokenTypes.PortalRefreshToken);
};

export const getNewAccessToken = async refreshToken => {
  let response;
  const formData = new FormData();
  formData.append('refresh_token', refreshToken);
  formData.append('grant_type', 'refresh_token');

  try {
    response = await axios.post(`${API_URL}/token`, formData);
  } catch (error) {
    logout();
  }

  const { status, data } = response;

  // If refresh token is invalid. The server will return with status 200, invalid_grant
  if (status === 200 && data.error === 'invalid_grant') {
    logout();
  } else {
    setTokenData(data);
  }

  return data;
};

export const logIn = async (username, password) => {
  let response;

  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('grant_type', 'password');

  try {
    response = await axios.post(`${API_URL}/token`, formData);
  } catch (error) {
    logout();
    return false;
  }

  const { status, data } = response;

  if (status && status === 200 && !data.error) {
    setTokenData(data);
    return true;
  }

  return false;
};
