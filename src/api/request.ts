import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import { Storage } from '~/services';

const { REACT_APP_API_BASE_PATH } = process.env;

export const request = axios.create({
  baseURL: REACT_APP_API_BASE_PATH,
  timeout: 45000, // 45 seconds timeout
});

/**
 * Middleware, to change whatever we need in the request
 * ex: Put a bearer token in the request, if necessary
 */

interface CustomRequest {
  authorization?: string;
}

const successResponse = (response: any): AxiosResponse => response;

const addAuthHeaders = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  const token: Token | null = Storage.getToken();

  if (!token || isEmpty(token)) {
    return config;
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: `Bearer ${token?.access_token}`,
    },
  };
};

const handleError = (error: ErrorResponse): ErrorResponse => {
  throw error;
};

request.interceptors.response.use(successResponse, handleError);

request.interceptors.request.use(addAuthHeaders);

export default request;
