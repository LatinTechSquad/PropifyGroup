import 'reflect-metadata';
import { CreateRoleUseCase } from '../../../../src/modules/Role/application/create/CreateRoleUseCase';
import { CreateRoleMother } from './CreateRoleMother';
import { RoleMother } from '../domain/RoleMother';
import { RoleRepositoryMock } from '../mocks/RoleRepositoryMock';

let repository: RoleRepositoryMock;
let useCase: CreateRoleUseCase;

beforeEach(() => {
  repository = new RoleRepositoryMock();
  useCase = new CreateRoleUseCase(repository);
});

describe('RoleCreator', () => {
  it('should create a valid account for role', async () => {
    const request = await CreateRoleMother.random();
    const role = await RoleMother.from(request);
    await useCase.run(request);

    await repository.assertSaveHaveBeenCalledWith(role);
  }, 10000);
});
