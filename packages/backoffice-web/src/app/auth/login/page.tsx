'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import LoginForm from './components/LoginForm';

const Login = () => {
  const { isAuthenticated, isHydrated } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isHydrated) {
      setIsLoading(false);
      if (isAuthenticated) {
        router.push('/dashboard');
      }
    }
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated) {
    return null;
  }

  if (isAuthenticated) {
    return null;
  }
  if (isLoading) {
    return <div>cargando...</div>;
  }
  return (
    <div className='flex justify-center py-16'>
      <LoginForm />
    </div>
  );
};

export default Login;
