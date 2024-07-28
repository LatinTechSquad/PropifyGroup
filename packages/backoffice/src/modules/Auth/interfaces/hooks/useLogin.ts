
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../AuthContext';
import { login } from '../../infrastructure/authService';

interface UseLoginReturnType {
  errorMessage: string;
  handleLogin: (email: string, password: string) => Promise<void>;
}

export const useLogin = (): UseLoginReturnType => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const router = useRouter();
  const { setIsAuthenticated } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await login(email, password);
      if (response.success) {
        localStorage.setItem('JWtoken', response.data.token);
        setIsAuthenticated(true);
        router.push('/dashboard');
      } else {
        setErrorMessage(response.message || 'Error de autenticación');
      }
    } catch (error) {
      setErrorMessage('Error al autenticar usuario');
      console.error('Error:', error);
    }
  };

  return {
    errorMessage,
    handleLogin,
  };
};
