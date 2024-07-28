import RootLayout from '../../layout';
import LoginForm from './LoginForm';

const Login = () => {
	return (
		<RootLayout showSidebar={false}>
			<div className="flex justify-center py-16">
				<LoginForm />
			</div>
		</RootLayout>
	);
};

export default Login;
