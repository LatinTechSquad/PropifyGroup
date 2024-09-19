import { apiClient } from '@/utils/apiClient';

interface LoginResponse {
  success: boolean;
  message?: string;
  data: {
    token: string;
  };
  errors?: string[];
}

export const authenticateUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await apiClient('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.success) {
      return {
        success: false,
        message: response.message || 'Error authenticating user',
        errors: response.errors || [],
        data: { token: '' },
      };
    }

    return { success: true, data: response.data };
  } catch (error) {
    
    return {
      success: false,
      message: 'Error authenticating user',
      errors: (error as any).errors || ['Error unknow'],
      data: { token: '' },
    };
  }
};
