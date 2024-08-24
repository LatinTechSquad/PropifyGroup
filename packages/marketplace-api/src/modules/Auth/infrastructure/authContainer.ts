import { container } from 'tsyringe';
import { IAuthRepository } from '../domain/IAuthRepository';
import { IController } from 'src/modules/Shared/infrastructure/api/IController';
import { LoginUseCase } from '../application/login/LoginUseCase';
import { AuthRepository } from './persistence/AuthRepository';
import { AuthController } from './api/LoginController';
import { IUserTokenRepository } from '../domain/IUserTokenRepository';
import { UserTokenRepository } from './persistence/UserTokenRepository';

container.register<IAuthRepository>('AuthRepository', { useClass: AuthRepository });
container.register<IUserTokenRepository>('UserTokenRepository', { useClass: UserTokenRepository });
container.register<IController>('AuthController', { useClass: AuthController });
container.register('LoginUseCase', { useClass: LoginUseCase });

export { container as authContainer };
