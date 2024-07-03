import { container } from 'tsyringe';
import { IAuthRepository } from '../domain/IAuthRepository';
import { IController } from 'src/modules/Shared/infrastructure/api/IController';
import { LoginUseCase } from '../application/login/LoginUseCase';
import { AuthRepository } from './persistence/AuthRepository';
import { AuthController } from './api/LoginController';

container.register<IAuthRepository>('AuthRepository', { useClass: AuthRepository });
container.register<IController>('AuthController', { useClass: AuthController });
container.register('LoginUseCase', { useClass: LoginUseCase });

export { container as authContainer };
