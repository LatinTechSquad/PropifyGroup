import { getCookie } from 'cookies-next';

const API_BASE_URL = 'https://api.propifygroup.com/api';

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

    if (!response.ok) {
        // Manejar errores de autenticación
        if (response.status === 401) {
            // Token expirado o inválido
            // Implementar la lógica para refrescar el token o hacer logout
        }
        throw new Error('API request failed');
    }

    return response.json();
};