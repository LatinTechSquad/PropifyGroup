'use client';
import { FormProvider, useForm } from 'react-hook-form';
import Link from 'next/link';
import InputText from '@/components/ui/InputText';
import SubmitButton from '@/components/ui/SubmitButton';
import { useLogin } from '@/hooks/auth/useLogin';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const methods = useForm<FormData>({
    mode: 'onChange',
  });

 

  const { errorMessages, handleLogin } = useLogin();
  const { isValid, isDirty } = methods.formState;

  const onSubmit = (data: FormData) => {
    handleLogin(data.email, data.password);
  };

  return (
    <FormProvider {...methods}>
      <div className='bg-[#F9F6F6] flex flex-col items-center justify-center rounded-xl shadow-md px-20 py-12'>
        <h2 className='text-gray-500'>Iniciar sesión</h2>
        <span className='text-gray-600 mb-4'>Accede a tu cuenta con:</span>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputText
            fieldName='email'
            placeholder='Correo electrónico'
            type='email'
            validationRules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Formato de correo electrónico inválido',
              },
            }}
          />

          <InputText
            fieldName='password'
            placeholder='Contraseña'
            type='password'
            validationRules={{
              required: 'Contraseña es obligatoria',
            }}
          />

          <div className='flex flex-col items-center justify-center border-gray-300 border-b-2'>
            <SubmitButton
              label={'Iniciar sesión'}
              styles='bg-blue-800 text-slate-50 w-3/4 justify-center text-center rounded-xl px-2 py-2 mt-4'
              onSubmit={onSubmit}
              disabled={!isValid || !isDirty}
            />
            {errorMessages.length > 0 && (
              <div className='text-red-500'>
                {errorMessages.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
            <Link href='/login/forgot-password' className='text-primary-color text-sm py-2'>
              Olvidé mi contraseña
            </Link>
          </div>

          <div className='flex flex-col items-center justify-center gap-4 py-4'>
            <p>
              No tengo cuenta y quiero{' '}
              <Link href='/auth/register' className='text-primary-color'>
                registrarme
              </Link>
            </p>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
