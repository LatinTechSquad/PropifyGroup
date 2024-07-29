'use client';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import InputText from '@/components/form/InputText';
import SubmitButton from '@/components/form/SubmitButton';
import { useLogin } from '@/modules/Auth/interfaces/hooks/useLogin';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;

  const { errorMessage, handleLogin } = useLogin();

  const onSubmit = ({ email, password }: FormData) => {
    handleLogin(email, password);
  };

  return (
    <FormProvider {...methods}>
      <div className='bg-[#F9F6F6] flex flex-col items-center justify-center rounded-xl shadow-md px-20 py-12'>
        <h2 className='text-gray-500'>Iniciar sesión</h2>
        <span className='text-gray-600 mb-4'>Accede a tu cuenta con:</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText fieldName='email' placeholder='Correo electrónico' type='email' />

          <InputText fieldName='password' placeholder='Contraseña' type='password' />

          <div className='flex flex-col items-center justify-center border-gray-300 border-b-2'>
            <SubmitButton
              label={'Iniciar sesión'}
              styles='bg-blue-800 text-slate-50 w-3/4 justify-center text-center rounded-xl px-4 py-2'
              onSubmit={onSubmit}
            />
            {errorMessage && <span className='text-red-500'>{errorMessage}</span>}
            <Link href='/login/forgot-password' className='text-blue-600 text-sm py-2'>
              Olvidé mi contraseña
            </Link>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
