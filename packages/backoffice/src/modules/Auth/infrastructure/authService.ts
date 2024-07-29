import { apiClient } from '@/modules/Shared/infrastructure/apiClient';

interface LoginResponse {
	success: boolean;
	message?: string;
	data: {
		token: string;
	};
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
	try {
		const response = await apiClient('/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		return { success: true, data: response.data };
	} catch (error) {
		console.error('Error al autenticar usuario:', error);
		return { success: false, message: 'Error al autenticar usuario', data: { token: '' } };
	}
};
