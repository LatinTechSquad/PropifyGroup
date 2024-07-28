interface LoginResponse {
	success: boolean;
	message?: string;
	data: {
		token: string;
	};
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
	try {
		const response = await fetch('https://api.propifygroup.com/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			const errorData = await response.json();
			return { success: false, message: errorData.error, data: { token: '' } };
		}

		const responseData = await response.json();
		return { success: true, data: responseData.data };
	} catch (error) {
		console.error('Error al autenticar usuario:', error);
		return { success: false, message: 'Error al autenticar usuario', data: { token: '' } };
	}
};
