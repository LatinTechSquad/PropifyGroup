'use client';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import InputText from '@/components/form/InputText';
import SubmitButton from '@/components/form/SubmitButton';
import SocialLoginButton from '@/components/form/SocialLoginButton';
import { BiLogoGoogle } from 'react-icons/bi';
import { BiLogoFacebookCircle } from 'react-icons/bi';

type FormData = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const methods = useForm<FormData>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = methods;

	const [errorMessage, setErrorMessage] = useState('');
	const router = useRouter();

	const onSubmit = (data: FormData) => {
		const handleSubmitAsync = async () => {
			try {

				const response = await fetch('https://api.propifygroup.com/api/auth/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				if (response.ok) {
					// Usuario autenticado exitosamente
					console.log('Usuario autenticado exitosamente');
					router.push('/dashboard');
				} else {
					// Manejar errores de autenticación
					const errorData = await response.json();
					setErrorMessage(errorData.error);
				}
			} catch (error) {
				console.error('Error al autenticar usuario:', error);
			}
		};

		handleSubmitAsync();
	};

	return (
		<FormProvider {...methods}>
			<div className="bg-[#F9F6F6] flex flex-col items-center justify-center rounded-xl shadow-md px-20 py-12">
				<h2 className="text-gray-500">Iniciar sesión</h2>
				<span className="text-gray-600 mb-4">Accede a tu cuenta con:</span>

				<form onSubmit={handleSubmit(onSubmit)}>
					<InputText
						fieldName="email"
						placeholder="Correo electrónico"
						type="email"
						/* Registro de campo */
						{...register('email', { required: 'Correo electrónico es obligatorio' })}
					/>
					{errors.email && <span className="text-red-500">{errors.email.message}</span>}

					<InputText
						fieldName="password"
						placeholder="Contraseña"
						type="password"
						/* Registro de campo */
						{...register('password', { required: 'Contraseña es obligatoria' })}
					/>
					{errors.password && <span className="text-red-500">{errors.password.message}</span>}

					<div className="flex flex-col items-center justify-center border-gray-300 border-b-2">
						<SubmitButton
							label={'Iniciar sesión'}
							styles="bg-blue-800 text-slate-50 w-3/4 justify-center text-center rounded-xl px-4 py-2"
							onSubmit={onSubmit}
						/>
						{errorMessage && <span className="text-red-500">{errorMessage}</span>}
						<Link href="/login/forgot-password" className="text-blue-600 text-sm py-2">
							Olvidé mi contraseña
						</Link>
					</div>

					<div className="flex flex-col items-center justify-center gap-4 py-4">
						<SocialLoginButton
							icon={<BiLogoGoogle size="22px" />}
							title="Ingresar con Google"
							styles="flex items-center justify-evenly gap-4 bg-slate-50 border border-blue-800 text-gray-500"
						/>

						<SocialLoginButton
							icon={<BiLogoFacebookCircle size="22px" />}
							title="Ingresar con Facebook"
							styles="flex items-center justify-evenly gap-4 bg-slate-50 border border-blue-800 text-gray-500"
						/>
						<p>
							No tengo cuenta y quiero{' '}
							<Link href="/auth/register" className="text-blue-700">
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
