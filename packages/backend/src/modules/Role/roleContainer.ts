import { container } from 'tsyringe';
import { IController } from '../Shared/infrastructure/api/IController';
import { CreateRoleUseCase } from './application/create/CreateRoleUseCase';
import { IRoleRepository } from './domain/IRoleRepository';
import { ExistRoleById } from './domain/services/ExistRoleById';
import { CreateRoleController } from './infrastructure/api/CreateRoleController';
import { RoleRepository } from './infrastructure/persistence/RoleRepository';
import { UpdateRoleUseCase } from './application/update/UpdateRoleUseCase';
import { UpdateRoleController } from './infrastructure/api/UpdateRoleController';
import { DeleteRoleUseCase } from './application/delete/DeleteRoleUseCase';
import { DeleteRoleController } from './infrastructure/api/DeleteRoleController';
import { GetRoleByIdController } from './infrastructure/api/GetRoleByIdController';
import { GetRoleByIdUseCase } from './application/getById/GetRoleByIdUseCase';

container.register<IRoleRepository>('RoleRepository', { useClass: RoleRepository });
container.register('ExistRoleById', { useClass: ExistRoleById });
container.register('CreateRoleUseCase', { useClass: CreateRoleUseCase });
container.register('UpdateRoleUseCase', { useClass: UpdateRoleUseCase });
container.register('DeleteRoleUseCase', { useClass: DeleteRoleUseCase });
container.register('GetRoleByIdUseCase', { useClass: GetRoleByIdUseCase });
container.register<IController>('CreateRoleController', { useClass: CreateRoleController });
container.register<IController>('UpdateRoleController', { useClass: UpdateRoleController });
container.register<IController>('DeleteRoleController', { useClass: DeleteRoleController });
container.register<IController>('GetRoleByIdController', { useClass: GetRoleByIdController });

export { container as roleContainer };
