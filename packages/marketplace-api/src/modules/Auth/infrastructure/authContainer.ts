import { container } from 'tsyringe';
import { IAuthRepository } from '../domain/IAuthRepository';
import { IController } from 'src/modules/Shared/infrastructure/api/IController';
import { LoginUseCase } from '../application/login/LoginUseCase';
import { AuthRepository } from './persistence/AuthRepository';
import { AuthController } from './api/LoginController';
import { IUserTokenRepository } from '../domain/IUserTokenRepository';
import { UserTokenRepository } from './persistence/UserTokenRepository';
import { LogoutUseCase } from '../application/logout/LogoutUseCase';
import { LogoutController } from './api/LogoutController';

container.register<IAuthRepository>('AuthRepository', { useClass: AuthRepository });
container.register<IUserTokenRepository>('UserTokenRepository', { useClass: UserTokenRepository });
container.register<IController>('AuthController', { useClass: AuthController });
container.register<IController>('LogoutController', { useClass: LogoutController });
container.register('LoginUseCase', { useClass: LoginUseCase });
container.register('LogoutUseCase', {useClass: LogoutUseCase});

export { container as authContainer };
