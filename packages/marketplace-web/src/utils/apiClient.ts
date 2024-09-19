import { getCookie } from 'cookies-next';

const API_BASE_URL =
  process.env.NODE_ENV === 'production' ? 'https://api-marketplace.propifygroup.com/v1' : 'http://localhost:3002/v1';

export const apiClient = async (endpoint: string, options: RequestInit = {}) => {
  const token = getCookie('JWtoken');

  const headers = new Headers(options.headers);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

   const data = await response.json();

   if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Unauthorized');  
    } else {
     
      const errorMessage = data.message || 'API request failed';
      const errors = data.errors || []; 

      throw { message: errorMessage, errors };
    }
  }
 
   return data;
};
