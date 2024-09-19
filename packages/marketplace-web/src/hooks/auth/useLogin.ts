import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { authenticateUser } from '../../services/authService';
import { useTranslation } from 'react-i18next';

interface UseLoginReturnType {
  errorMessages: string[];
  handleLogin: (email: string, password: string) => Promise<void>;
}

export const useLogin = (): UseLoginReturnType => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const router = useRouter();
  const { performLogin } = useAuth();
  const { t } = useTranslation();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await authenticateUser(email, password);
      if (response.success) {
        performLogin(response.data.token);
        router.push('/dashboard');
      } else {
        if (response.errors && response.errors.length > 0) {
          setErrorMessages(response.errors.map(error => t(error)));
        } else {
          setErrorMessages([t(response.message || 'Error authenticating user')]);
        }
      }
    } catch (error) {
      setErrorMessages([t('Error authenticating user')]);
      console.error('Error:', error);
    }
  };

  return {
    errorMessages,
    handleLogin,
  };
};
