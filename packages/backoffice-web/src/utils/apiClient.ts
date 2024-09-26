import { getCookie } from 'cookies-next';

const API_BASE_URL =
  process.env.NODE_ENV === 'production' ? 'https://api-marketplace.propifygroup.com/v1' : 'http://localhost:3002/v1';

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const token = getCookie('JWtoken');

  const headers = new Headers(options.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  console.log('API_BASE_URL:', API_BASE_URL);
  console.log('process.env:', process.env);

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
    }
    throw new Error('API request failed');
  }

  return response.json();
};
