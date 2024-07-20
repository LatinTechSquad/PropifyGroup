import { container } from 'tsyringe';
import { IController } from '../Shared/infrastructure/api/IController';
import { CreateUserUseCase } from './application/create/CreateUserUseCase';
import { IUserRepository } from './domain/IUserRepository';
import { CreateUserController } from './infrastructure/api/CreateUserController';
import { UserRepository } from './infrastructure/persistence/UserRepository';
import { IUseCase } from '../Shared/application/IUseCase';
import { ICreateUserRequest } from './application/create/ICreateUserRequest';
import { DeleteUserUseCase } from './application/delete/DeleteUserUseCase';
import { GetAllUsersUseCase } from './application/getAll/GetAllUsersUseCase';
import { GetUserByIdUseCase } from './application/getById/GetUserByIdUseCase';
import { UpdateUserUseCase } from './application/update/UpdateUserUseCase';
import { DeleteUserController } from './infrastructure/api/DeleteUserController';
import { GetAllUsersController } from './infrastructure/api/GetAllUsersController';
import { GetUserByIdController } from './infrastructure/api/GetUserByIdController';
import { UpdateUserController } from './infrastructure/api/UpdateUserController';
import { IUpdateUserRequest } from './application/update/IUpdateUserRequest';
import { GetAllUsersResponse } from './application/getAll/GetAllUsersResponse';
import { GetUserByIdResponse } from './application/getById/GetUserByIdResponse';
import { IHashService } from './domain/services/IHashService';
import { HashService } from './infrastructure/security/HashService';

container.register<IUserRepository>('UserRepository', { useClass: UserRepository });
container.register<IUseCase<ICreateUserRequest, void>>('CreateUserUseCase', { useClass: CreateUserUseCase });
container.register<IUseCase<IUpdateUserRequest, void>>('UpdateUserUseCase', { useClass: UpdateUserUseCase });
container.register<IUseCase<string, void>>('DeleteUserUseCase', { useClass: DeleteUserUseCase });
container.register<IUseCase<string, GetUserByIdResponse>>('GetUserByIdUseCase', { useClass: GetUserByIdUseCase });
container.register<IUseCase<string, GetAllUsersResponse[]>>('GetAllUsersUseCase', { useClass: GetAllUsersUseCase });
container.register<IController>('CreateUserController', { useClass: CreateUserController });
container.register<IController>('UpdateUserController', { useClass: UpdateUserController });
container.register<IController>('DeleteUserController', { useClass: DeleteUserController });
container.register<IController>('GetUserByIdController', { useClass: GetUserByIdController });
container.register<IController>('GetAllUsersController', { useClass: GetAllUsersController });
container.register<IHashService>('HashService', { useClass: HashService });

export { container as userContainer };
