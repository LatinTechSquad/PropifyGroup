import { getCookie } from 'cookies-next';

const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_REMOTE_API_BASE_URL
    : process.env.NEXT_PUBLIC_LOCAL_API_BASE_URL;
  

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const token = getCookie('JWtoken');

  const headers = new Headers(options.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  console.log('API_BASE_URL:', API_BASE_URL); // Verifica que API_BASE_URL esté correctamente configurado
  console.log('process.env:', process.env); // Verifica las variables de entorno disponibles

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
